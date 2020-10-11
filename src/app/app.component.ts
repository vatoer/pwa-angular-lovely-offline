import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './app.component-template.html',
  //styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lovely-offline';
  constructor(db: AngularFirestore) {

  }
}
