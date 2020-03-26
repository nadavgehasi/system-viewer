export const ID_FIELD: keyof Server = "id";
export const SERVER_NAME_FIELD: keyof Server = "serverName";
export const SERVER_BASE_FIELD: keyof Server = "serverBase";
export const TEAM_NAME_FIELD: keyof Server = "teamName";
export const SYSTEM_NAME_FIELD: keyof Server = "systemName";
export const STATUS_FIELD: keyof Server = "status";
export const TAGS_FIELD: keyof Server = "tags";
export const RAM_FIELD: keyof Server = "ram";
export const CORES_FIELD: keyof Server = "cores";

interface ServerInterface {
  id: string;
  serverName: string;
  serverBase: string;
  teamName: string;
  systemName: string;
  status: string;
  tags: Array<string>;
  ram: string;
  cores: string;
}

export class Server implements ServerInterface {
  id: string;
  serverName: string;
  serverBase: string;
  teamName: string;
  systemName: string;
  status: string;
  tags: Array<string>;
  ram: string;
  cores: string;

  constructor(server: ServerInterface) {
    this.id = server.id;
    this.serverName = server.serverName;
    this.serverBase = server.serverBase;
    this.teamName = server.teamName;
    this.systemName = server.systemName;
    this.status = server.status;
    this.tags = server.tags;
    this.ram = server.ram;
    this.cores = server.cores;
  }
}
