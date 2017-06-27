import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(input: Array<any>, args?: any): any {
    let result = [];
    if(input&& args ){
    input.forEach(x=>{
      if(x.userId.toString().includes(args)){
        result.push(x);
      }
    })
  }
  else{
    return input;
  }
    return result;
  }


  }


