import {NgModule, Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {MenuModule, MENU_ROUTES} from './menu';
import {Repository} from './repository';

@Component({
  selector: 'root-cmp',
  template: `
    <router-outlet></router-outlet>
    <div class="ng-view"></div>
  `,
})
export class RootCmp {}

@NgModule({
  imports: [
    BrowserModule,

    MenuModule,

    RouterModule.forRoot([
      ...MENU_ROUTES,
      { path: 'messages', loadChildren: './messages/index#MessagesModule' },
      { path: 'settings', loadChildren: './settings/index#SettingsModule' }
    ], {enableTracing: true})
  ],

  providers: [Repository],
  bootstrap: [RootCmp],
  declarations: [RootCmp]
})
export class AppModule {}