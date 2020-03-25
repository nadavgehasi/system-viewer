interface SystemInterface{
    id: string;
    name: string;
    systemServerName: string;
    systemServerId: string;
    systemTeam: string;
    info: string;
}

export class System implements SystemInterface {
    id: string;
    name: string;
    systemServerName: string;
    systemServerId: string;
    systemTeam: string;
    info: string;

    constructor(system: SystemInterface) {
        this.id = system.id;
        this.name = system.name;
        this.systemServerName = system.systemServerName;
        this.systemServerId = system.systemServerId;
        this.systemTeam = system.systemTeam;
        this.info = system.info;
    }
}