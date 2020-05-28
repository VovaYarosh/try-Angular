import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Wanna learn angular components', text: 'I am still learning components yet', id: 1},
    {title: 'Next block', text: 'Will be about directives and about pipes', id: 1}
  ];
}
