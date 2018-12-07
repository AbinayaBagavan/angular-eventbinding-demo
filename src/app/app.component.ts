import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:string="Event binding";
  counter :number=0;
  displayString:string="";

  incrementCounter() {
    this.counter = this.counter+1;
  };
  changeValue(value:string) {
    this.displayString = value;
  }
}
