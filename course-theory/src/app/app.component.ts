import {Component} from '@angular/core';

export interface  Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  search = '';
  posts: Post[] = [
    {title: 'Beer', text: 'the best beer in UK'},
    {title: 'JS', text: 'the best leanguage in the world'},
    {title: 'Bread', text: 'the best bread in Ukraine'}
  ];
  addPost(){
    this.posts.unshift({
      title: 'Angilar 8',
      text: 'Vova norma'
    });
  }
}
