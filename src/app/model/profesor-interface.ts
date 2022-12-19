import { FormControl } from "@angular/forms";

export interface IProfesor {
    id:         number;
    dni:        string;
    nombre:     string;
    apellido1:  string;
    apellido2:  string;
    email:      string;
}

export interface IProfesor2Form {
    id:         FormControl<number>;
    dni:        FormControl<string>;
    nombre:     FormControl<string>;
    apellido1:  FormControl<string>;
    apellido2:  FormControl<string>;
    email:      FormControl<string>;
}
export interface IProfesor2Send {
    dni:        string;
    nombre:     string;
    apellido1:  string;
    apellido2:  string;
    email:      string;
}
