import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mult'
})
export class MultByPipe  implements PipeTransform{
  transform(num: any, pow: number): number {
    return num * pow;
  }
}
