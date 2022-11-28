import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToCsv'
})
export class ArrayToCsvPipe implements PipeTransform {

  transform(stringArr: any[]): string {
    const tran = stringArr.map(x => x.type.name);
    return tran.join();
  }

}
