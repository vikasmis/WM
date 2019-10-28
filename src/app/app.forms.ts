// replica of app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.forms.html',
  styleUrls: ['./general.scss']
})

export class AppComponent {
  title = 'Navigation';
  show: boolean;
  defaultUserName: string;
  EnteredUsernName: string;
  options=["BUYER","SELLER"]
  selectedOption:string;
  name='';
  constructor() {
    this.show = false;
    this.defaultUserName = 'vikash';
    this.EnteredUsernName = ''
  }

  clickButton() {
    alert("Your data have been saved, please check you mail ID for verfication");
  }
  password() {
    this.show = !this.show;
  }
  username() {
  }
  
}
