import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { TaskService } from "./service/task.service";
import { Subscriber } from "../../node_modules/rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.router.navigateByUrl('entrega')
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
