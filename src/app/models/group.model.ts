import { Person } from './person.model';

export interface Group {
    id: string;
    name: string;
    members: Person[];
}
