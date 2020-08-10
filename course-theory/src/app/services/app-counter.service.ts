import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {

  counter = 0;
  constructor(public logService: LogService){
  }
  increase(){
    this.logService.log('add');
    this.counter++;
  }
  decrease(){
    this.logService.log('minus');
    this.counter--;
  }
}
