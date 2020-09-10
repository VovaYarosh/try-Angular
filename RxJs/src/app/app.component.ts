import { Component } from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sub: Subscription;
  constructor(){
    const stream$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 500);
      setTimeout(() => {
        observer.error('something went wrong');
      }, 1500);
      setTimeout(() => {
        observer.complete();
      }, 2400);
    });
    this.sub = stream$
      .subscribe(
        value => console.log('next', value),
        error => console.log('error', error),
        () => console.log('Complete')
    );
  }
  stop(){
    this.sub.unsubscribe();
  }
}
