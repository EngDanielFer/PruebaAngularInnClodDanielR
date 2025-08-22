import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Proyecto } from "../interfaces/proyecto.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProyectoService {
    constructor(
        private http: HttpClient
    ) {

    }

    getProyecto(id:number) {
        return this.http.get<Proyecto>(`${environment.baseUrlAPI}/users/${id}`);
    }

    getTodosProyectos(){
        return this.http.get<Proyecto>(`${environment.baseUrlAPI}/users`);
    }
}