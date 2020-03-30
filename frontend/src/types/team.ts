interface TeamInterface {
  id: string;
  name: string;
  servers: Array<string>;
  numberOfServers: number;
  systems: Array<string>;
  numberOfSystems: number;
  info: string;
}

export class Team implements TeamInterface {
  id: string;
  name: string;
  servers: Array<string>;
  numberOfServers: number;
  systems: Array<string>;
  numberOfSystems: number;
  info: string;

  constructor(team: TeamInterface) {
    this.id = team.id;
    this.name = team.name;
    this.servers = team.servers;
    this.numberOfServers = team.numberOfServers;
    this.systems = team.systems;
    this.numberOfSystems = team.numberOfSystems;
    this.info = team.info;
  }
}
