#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import shutil


def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'poetry_web.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


def copy_db_if_not_exists():
    if not os.path.exists('database/db.sqlite3'):
        shutil.copy2('db.sqlite3.initial', 'database/db.sqlite3')


if __name__ == '__main__':
    copy_db_if_not_exists()
    main()
