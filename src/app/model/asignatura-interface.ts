import { FormControl } from "@angular/forms";
import { IProfesor } from "./profesor-interface";

export interface IAsignatura {
    id: number;
    nombre: string;
    profesor: IProfesor;
    isbnLibro: string;
}

export interface IAsignatura2Form {
    nombre: FormControl<string>;
    profesor: FormControl<number>;
    isbnLibro: FormControl<string>;
}

export interface IAsignatura2Send {
    nombre: string;
    profesor: number;
    isbnLibro: string;
}