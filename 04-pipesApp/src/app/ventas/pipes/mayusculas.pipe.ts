import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(valor: string, enMayuscuklas: boolean = true): string {
        return enMayuscuklas ? valor.toUpperCase() : valor.toLowerCase()
    }
}