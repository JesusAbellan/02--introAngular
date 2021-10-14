import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miFecha'
})
export class MiFechaPipe implements PipeTransform {
  public meses:string[] = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

  transform(value: string, formatoLargo:boolean): string {
    if(!value)
    {
      return '';
    }
    let fecha = value.split('T')[0];
    let dia = fecha.split('-')[2];
    let mes = fecha.split('-')[1];
    let anyo = fecha.split('-')[0];
    if(formatoLargo){
      return dia + ' de ' + this.meses[parseInt(mes)-1] + ' del ' + anyo;
    }
    return dia + ' del ' + mes + ' de ' + anyo;
  }
}
