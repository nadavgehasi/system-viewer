interface TeamInterface {
    id: string;
    name: string;
    numberOfServers: number;
    numberOfSystems: number;

}

export class Team {
    id: string;
    name: string;
    numberOfServers: number;
    numberOfSystems: number;

    constructor(team: TeamInterface) {
        this.id = team.id;
        this.name = team.name;
        this.numberOfServers = team.numberOfServers;
        this.numberOfSystems = team.numberOfSystems;
    }
}