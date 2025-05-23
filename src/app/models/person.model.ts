export interface Person {
    id: string;
    name: string;
    gender: 'masculin' | 'féminin' | 'ne se prononce pas';
    frenchLevel: 1 | 2 | 3 | 4;
    isDwwmAlumni: boolean;
    techLevel: 1 | 2 | 3 | 4;
    profile: 'timide' | 'réservé' | 'à l’aise';
    age: number;
}
