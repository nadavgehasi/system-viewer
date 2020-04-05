#!/usr/bin/python3.8

import paramiko
import graphyte
import requests
import os

GRAPHITE_SERVER = 'graphite'
BACKEND_SERVER = 'backend:8000'

CPU_COUNT_COMMAND = ("nproc", 'cpu')
MEMORY_USED_PERCENT_COMMAND = ('awk \'/^Mem/ {printf("%u", 100*$3/$2);}\' <(free -m)', 'memory.percent')
MEMORY_TOTAL_COUNT_COMMAND = ("awk '/^Mem/ {print $2}' <(free -m)", 'memory.total')
MEMORY_USED_COUNT_COMMAND = ("awk '/^Mem/ {print $3}' <(free -m)", 'memory.used')
COMMANDS = [CPU_COUNT_COMMAND, MEMORY_TOTAL_COUNT_COMMAND, MEMORY_USED_COUNT_COMMAND, MEMORY_USED_PERCENT_COMMAND]

REQUEST_URL = f"http://{BACKEND_SERVER}/api/servers/?format=json"
DOCKER_HOST_IP = '172.17.0.1'


def get_servers():
    r = requests.get(REQUEST_URL)
    return map(lambda server: server['name'], r.json())


def main():
    graphyte.init(GRAPHITE_SERVER, prefix='hosts')

    client = paramiko.SSHClient()
    client.load_system_host_keys()
    client.set_missing_host_key_policy(paramiko.WarningPolicy)

    for host_name in get_servers():
        try:
            # CHANGE BEFORE PRODUCTION
            client.connect(DOCKER_HOST_IP)
            for command, graphite_key in COMMANDS:
                stdin, stdout, stderr = client.exec_command(command, get_pty=True)
                cpu_count = int(stdout.read().decode('ascii').strip())
                graphyte.send(f'{host_name}.{graphite_key}', cpu_count)
                print(f'{host_name} {graphite_key} {cpu_count}')
        except:
            print(f'Unable to connect {host_name}')
        finally:
            client.close()


if __name__ == '__main__':
    main()
