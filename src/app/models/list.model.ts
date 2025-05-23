import { Person } from './person.model';
import { Group } from './group.model';

export interface PersonList {
    id: string;
    name: string;
    persons: Person[];
    draws: Group[];
}
