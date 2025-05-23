import { Injectable } from '@angular/core';

interface User {
    email: string;
    password: string;
    firstName: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUser: User | null = null;

    getCurrentUser(): User | null {
        return this.currentUser;
    }

    async login(email: string, password: string): Promise<boolean> {
        const response = await fetch('assets/users.json');
        const users: User[] = await response.json();

        const found = users.find(user => user.email === email && user.password === password);
        if (found) {
            this.currentUser = found;
            return true;
        }
        return false;
    }

    logout() {
        this.currentUser = null;
    }

    isAuthenticated(): boolean {
        return this.currentUser !== null;
    }
}
