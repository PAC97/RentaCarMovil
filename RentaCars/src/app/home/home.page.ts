import { Component } from '@angular/core';
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pages = [
    {
      title: 'Entrega',
      url: '/menu/entrega'
    }
    ,
    {
      title: 'Reserva',
      url: '/menu/reserva'
    }
  ];

  selectedPath = '';

  constructor(private router: Router){
this.router.events.subscribe((event: RouterEvent)=>
{
  this.selectedPath = event.url;
});
  }
}
