import {Server} from "../types/server"
 export const getServers = () => {
     return [
         new Server({
             serverName: 'yamut',
             systemName: 'greenmile',
             status: 'Down',
             tags: ['Operational'],
             ram: '24GB',
             cores: '24',
         }),
         new Server({
             serverName: 'yarmon',
             systemName: 'armon',
             status: 'Good',
             tags: ['Operational'],
             ram: '128GB',
            cores: '64',
         }),
         new Server({
             serverName: 'eliza',
             systemName: 'alice',
             status: 'Up',
             tags: ['Tests'],
             ram: '16GB',
             cores: '24',
         }),
     ];
 };