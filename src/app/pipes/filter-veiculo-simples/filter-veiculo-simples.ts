import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVeiculo'
})
export class FilterPipeVeiculoSimples implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const veiculoSimples of value) {
      if (veiculoSimples.renavam.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(veiculoSimples);
      };
    };
    return resultPosts;
  }

}
