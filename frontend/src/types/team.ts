interface TeamInterface {
  id: string;
  name: string;
  numberOfServers: number;
  numberOfSystems: number;
  info: string;
}

export class Team implements TeamInterface {
  id: string;
  name: string;
  numberOfServers: number;
  numberOfSystems: number;
  info: string;

  constructor(team: TeamInterface) {
    this.id = team.id;
    this.name = team.name;
    this.numberOfServers = team.numberOfServers;
    this.numberOfSystems = team.numberOfSystems;
    this.info = team.info;
  }
}
