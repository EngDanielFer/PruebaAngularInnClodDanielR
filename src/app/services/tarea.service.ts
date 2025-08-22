import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Tarea } from "../interfaces/tarea.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TareaService {
    constructor(
        private http: HttpClient
    ) {

    }

    getTarea(id:number) {
        return this.http.get<Tarea>(`${environment.baseUrlAPI}/todos/${id}`)
    }

    getTareaByUser(userId:number) {
        return this.http.get<Tarea>(`${environment.baseUrlAPI}/todos?userId=${userId}`)
    }

    getTodasTareas() {
        return this.http.get<Tarea>(`${environment.baseUrlAPI}/todos`)
    }
}