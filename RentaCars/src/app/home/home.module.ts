import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes =[
  {
    path: 'home',
    component: HomePage,
    children:[
      {path: 'entrega', loadChildren:'./entrega/entrega.module#EntregaPageModule'},
      { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/home/entrega'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
