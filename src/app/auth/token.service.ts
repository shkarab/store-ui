import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

    private token: string = 'raya.token';

    getToken(): string {
        return localStorage.getItem(this.token);
    }

    removeToken(): void {
        localStorage.removeItem(this.token);
    }

    setToken(token: string): void {
        localStorage.setItem(this.token, token);
    }

}