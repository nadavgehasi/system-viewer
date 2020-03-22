export class Server {
    name: string;
    system: string;
    status: string;
    tags: Array<string>;

    constructor(name: string, system: string, status: string, tags: Array<string>) {
        this.name = name;
        this.system = system;
        this.status = status;
        this.tags = tags;
    }
}