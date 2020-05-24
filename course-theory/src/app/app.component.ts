import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue = '';
  text = '';
  constructor(){}
  onInput(event){
    this.inputValue = event.target.value;
  }
  onClick(value){
    this.text = value;
  }
}
