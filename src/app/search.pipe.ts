import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[] , args: string ): any[] {
    if (!value) return [];
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(data =>{
     return data['model'].toLowerCase().includes(args)          ||
            data['type'].toLowerCase().includes(args)           ||
            data['manufacturer'].toLowerCase().includes(args);
    })
    //the data will be returned will depend on the json file
  }

}
