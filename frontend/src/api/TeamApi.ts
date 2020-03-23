import {Team} from "../types/team";

export const getTeams = (): Array<Team> => [
    new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10
    }),
];