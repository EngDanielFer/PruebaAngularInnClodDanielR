import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor() {}

    usuarioEstaAutenticado(): boolean {
        return !!localStorage.getItem('usuario');
    }

    getUsuario(): string | null {
        return localStorage.getItem('usuario');
    }

    logout(): void {
        localStorage.removeItem('usuario');
    }
}