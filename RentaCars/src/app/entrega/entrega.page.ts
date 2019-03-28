import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";
import { TaskService } from "../service/task.service";
import { Task } from "../interfaz/task";

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {
  tasks: Task[] = [];
  constructor(private menu:MenuController, private taskService: TaskService) { 

  }
  
  ngOnInit() {
    this.taskService.getAllTask()
    .subscribe(tasks =>{
      console.log(tasks)
      this.tasks= tasks;
    })
  }

}
