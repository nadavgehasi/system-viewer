interface SystemInterface {
    id: string;
    name: string;
    systemServerName: string;
    systemServerId: string;
    systemTeam: string;
}

export class System {
    id: string;
    name: string;
    systemServerName: string;
    systemServerId: string;
    systemTeam: string;

    constructor(system: SystemInterface) {
        this.id = system.id;
        this.name = system.name;
        this.systemServerName = system.systemServerName;
        this.systemServerId = system.systemServerId;
        this.systemTeam = system.systemTeam;
    }
}