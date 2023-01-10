import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
import { IProfesor } from "./profesor-interface";

export interface IAsignatura {
    id: number;
    nombre: string;
    profesor: IProfesor;
    isbnLibro: string;
}

export interface IAsignatura2Form {
    id: FormControl<number>;
    nombre: FormControl<string>;
    profesor: FormControl<IEntity>;
    isbnLibro: FormControl<string>;
}

export interface IAsignatura2Send {
    nombre: string;
    profesor: IEntity;
    isbnLibro: string;
}

export interface IAsignatura2Edit extends IEntity {
    nombre: string;
    profesor: IEntity;
    isbnLibro: string;
}