export const SERVER_NAME_FIELD: keyof Server = 'serverName';
export const SYSTEM_NAME_FIELD: keyof Server = 'systemName';
export const STATUS_FIELD: keyof Server = 'status';
export const TAGS_FIELD: keyof Server = 'tags';
export const RAM_FIELD: keyof Server = 'ram';
export const CORES_FIELD: keyof Server = 'cores';

interface ServerInterface {
    serverName: string;
    systemName: string;
    status: string;
    tags: Array<string>;
    ram: string;
    cores: string;
}

export class Server {
    serverName: string;
    systemName: string;
    status: string;
    tags: Array<string>;
    ram: string;
    cores: string;

    constructor(server: ServerInterface) {
        this.serverName = server.serverName;
        this.systemName = server.systemName;
        this.status = server.status;
        this.tags = server.tags;
        this.ram = server.ram;
        this.cores = server.cores;
    }
}