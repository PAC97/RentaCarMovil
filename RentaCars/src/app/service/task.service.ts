import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task, Reserva } from "../interfaz/task";
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getAllTask(){
    const path = 'http://localhost:1750/api/Estado';
    return this.http.get<Task[]>(path);
  }

  
}
