import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfesor, IProfesor2Form } from 'src/app/model/profesor-interface';
import { ProfesorService } from 'src/app/service/profesor.service';
import { SessionService } from 'src/app/service/session.service';

let bootstrap = require("bootstrap");

@Component({
  selector: 'app-profesor-edit',
  templateUrl: './profesor-edit.component.html',
  styleUrls: ['./profesor-edit.component.css']
})
export class ProfesorEditComponent implements OnInit {

  id: number = 0;
  oProfesor: IProfesor;
  oProfesor2Form: IProfesor2Form;
  oProfesor2Send: IProfesor;
  oForm: FormGroup<IProfesor2Form>;
  // validaciones de longitud
  lengthDni: number = 9;
  minLengthNombre: number = 2;
  maxLengthNombre: number = 12;
  minLengthApellido: number = 2;
  maxLengthApellido: number = 20;
  // modal
  idModal: string = "modalAvisoActualizacion";

  
  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oProfesorService: ProfesorService,
    private oSessionService: SessionService,
    private oFormBuilder: FormBuilder,
    private oLocation: Location
  ) {
    oSessionService.reload();
    oSessionService.checkSession().subscribe({
      next: (data: any) => {
        // ok
      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }
    })

    this.id = oActivatedRoute.snapshot.params['id'];
    this.oProfesor = {} as IProfesor;
    this.oProfesor2Form = {} as IProfesor2Form;
    this.oProfesor2Send = {} as IProfesor;
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
          dni: [data.dni, [Validators.required, Validators.minLength(this.lengthDni), Validators.maxLength(this.lengthDni), Validators.pattern('([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z])')]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]],
          apellido1: [data.apellido1, [Validators.required, Validators.minLength(this.minLengthApellido), Validators.maxLength(this.maxLengthApellido)]],
          apellido2: [data.apellido2, [Validators.minLength(this.minLengthApellido), Validators.maxLength(this.maxLengthApellido)]],
          email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]      
        });
      }
    })
  }

  onSubmit() {
    this.oProfesor2Send = {
      id: this.oForm.value.id as number,
      dni: this.oForm.value.dni as string,
      nombre: this.oForm.value.nombre as string,
      apellido1: this.oForm.value.apellido1 as string,
      apellido2: this.oForm.value.apellido2 as string,
      email: this.oForm.value.email as string
    }
    if (this.oForm.valid) {
      this.oProfesorService.update(this.oProfesor2Send).subscribe({
        next: (data: number) => {
          this.showModal(this.id);
        }
      })
    }
  }

  showModal(data: number): void {
    const modalAviso = new bootstrap.Modal(document.getElementById(this.idModal), { 
      keyboard: false
    });
    modalAviso.show();
    this.oRouter.navigate(['/profesor', data, 'view'])
  }

  cancelar() {
    this.oLocation.back();
  }
}
