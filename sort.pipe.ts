import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true

})
export class SortPipe implements PipeTransform {

  transform(candidates: any[], column:string): any[] {
    let sortedArray = candidates.sort((a,b)=>{
      if(a[column] > b[column]){
        return 1;
      }
      if(a[column] < b[column]){
        return -1;
      }
    })
    return sortedArray;
  }

}
