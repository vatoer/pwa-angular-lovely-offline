import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  template: `
  <div class="appress-pwa-note">
    <app-header></app-header> 
    <div class="main">
      <router-outlet></router-outlet> 
    </div>
    <app-footer></app-footer> 
  </div>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lovely-offline';
  constructor(db: AngularFirestore) {

  }
}
