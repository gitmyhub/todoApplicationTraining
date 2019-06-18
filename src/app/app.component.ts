import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>{{message}}</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Marie';
  score = '100';
  message = 'welcome to full stack development';
  username = 'Shiksha';
}
