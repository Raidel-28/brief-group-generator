import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: any = null;

    constructor(private http: HttpClient) { }

    async login(email: string, password: string): Promise<boolean> {
        try {
            const users = await firstValueFrom(this.http.get<any[]>('/assets/users.json'));

            const found = users.find(u => u.email === email && u.password === password);
            if (found) {
                this.user = found;
                localStorage.setItem('user', JSON.stringify(found));
                return true;
            }
        } catch (err) {
            console.error('Erreur lors du chargement des utilisateurs', err);
        }
        return false;
    }

    isAuthenticated(): boolean {
        return !!this.user || !!localStorage.getItem('user');
    }

    getUser() {
        return this.user || JSON.parse(localStorage.getItem('user')!);
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user');
    }
}
