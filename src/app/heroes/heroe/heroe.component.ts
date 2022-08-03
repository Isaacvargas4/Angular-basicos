import { Component } from "@angular/core";




@Component({

    selector: "app-heroe",
    templateUrl:  './heroe.componet.html'

})


export class heroeComponent{

    nombre: string = "Iroman";
    edad  : number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = "SPIDERMAN";

    }

    cambiarEdad(): void {
        this.edad = 30;

    }

    

}