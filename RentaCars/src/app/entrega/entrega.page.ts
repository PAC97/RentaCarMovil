import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {

  constructor(private menu:MenuController) { }
  openFirst(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd(){
    this.menu.open('end')
  }

  openCustom(){
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  

  ngOnInit() {
  }

}
