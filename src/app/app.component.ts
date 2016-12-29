import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuTestePage } from '../pages/menu-teste/menu-teste';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = HomePage;

  pages: Array<{component: any, title: string, icon: string}>;

  constructor(platform: Platform) {

    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestePage, title: 'Menu', icon: 'menu'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: any) : void  {
    this.rootPage = page.component;
  }
}
