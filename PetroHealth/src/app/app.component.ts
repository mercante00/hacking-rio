import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Tarefas Diarias',
      url: 'tarefas-diarias',
      icon: ''
    },
    {
      title: 'Cuidados Pessoais',
      url: 'cuidados-pessoais',
      icon: ''
    },
    {
      title: 'Calendario',
      url: '/folder/Favorites',
      icon: ''
    },
    {
      title: 'Ranking',
      url: 'ranking',
      icon: ''
    },
    {
      title: 'Loja',
      url: 'home',
      icon: ''
    }
  ];
//  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl:NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  vaPrimeiros(){
    this.navCtrl.navigateForward("primeiros-soc");
  }
}
