import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfesor, IProfesor2Form, IProfesor2Send } from 'src/app/model/profesor-interface';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-profesor-edit',
  templateUrl: './profesor-edit.component.html',
  styleUrls: ['./profesor-edit.component.css']
})
export class ProfesorEditComponent implements OnInit {

  id: number = 0;
  oProfesor: IProfesor2Send;
  oProfesor2Form: IProfesor2Form;
  oProfesor2Send: IProfesor2Send;
  oForm: FormGroup<IProfesor2Form>;
  // validaciones de longitud
  lengthDni: number = 9;
  minLengthNombre: number = 2;
  maxLengthNombre: number = 12;
  minLengthApellido: number = 2;
  maxLengthApellido: number = 20;
  // modal
  idModal: string = "idModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  
  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oProfesorService: ProfesorService,
    private oFormBuilder: FormBuilder,
    private oLocation: Location
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
    this.oProfesor = {} as IProfesor;
    this.oProfesor2Form = {} as IProfesor2Form;
    this.oProfesor2Send = {} as IProfesor2Send;
    this.oForm = {} as FormGroup<IProfesor2Form>;
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oProfesorService.getOne(this.id).subscribe({
      next: (data: IProfesor) => {
        this.oProfesor = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id],
          dni: [data.dni, [Validators.required, Validators.minLength(this.lengthDni), Validators.maxLength(this.lengthDni), Validators.pattern('([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])')]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]],
          apellido1: [data.apellido1, [Validators.required, Validators.minLength(this.minLengthApellido), Validators.maxLength(this.maxLengthApellido)]],
          apellido2: [data.apellido2, [Validators.minLength(this.minLengthApellido), Validators.maxLength(this.maxLengthApellido)]],
          email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]      
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oProfesor2Form = {
      id: new FormControl(this.oForm.value.id) as FormControl<number>,
      dni: new FormControl(this.oProfesor.dni) as FormControl<string>,
      nombre: new FormControl(this.oForm.value.nombre) as FormControl<string>,
      apellido1: new FormControl(this.oForm.value.apellido1) as FormControl<string>,
      apellido2: new FormControl(this.oProfesor.apellido2) as FormControl<string>,
      email: new FormControl(this.oForm.value.email) as FormControl<string>
    }
  }

  cancelar() {
    this.oLocation.back();
  }
}
