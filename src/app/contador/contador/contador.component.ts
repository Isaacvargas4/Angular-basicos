
import { Component } from "@angular/core";


@Component ({

    selector: "app-contador",
    templateUrl: "contador.component.html"

    
})



export class contadorComponent{

    title: string = 'count app';
    number: number = 0;
    base: number = 5;
  
    acumulador( valor:number ) {
  
      return this.number += valor;
  
    }

}