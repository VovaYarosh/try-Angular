import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [1, 1, 2, 3, 5, 8, 13];
  objs = [
    {title: 'Post 1', author: 'Vova', comments: [
        {name: 'Bob', text: 'lorem 1'},
        {name: 'Carl', text: 'lorem 2'},
        {name: 'Dean', text: 'lorem 3'},
      ]},
    {title: 'Post 2', author: 'Vova', comments: [
        {name: 'Bob', text: 'lorem 1'},
        {name: 'Carl', text: 'lorem 2'},
        {name: 'Dean', text: 'lorem 3'},
      ]},
  ];
}
