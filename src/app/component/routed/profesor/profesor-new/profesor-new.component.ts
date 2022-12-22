import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProfesor2Form, IProfesor2Send } from 'src/app/model/profesor-interface';
import { ProfesorService } from 'src/app/service/profesor.service';
import { SessionService } from 'src/app/service/session.service';

let bootstrap = require("bootstrap");

@Component({
  selector: 'app-profesor-new',
  templateUrl: './profesor-new.component.html',
  styleUrls: ['./profesor-new.component.css']
})
export class ProfesorNewComponent implements OnInit {

  id: number = 0;
  oProfesor: IProfesor2Send;
  oProfesor2Form: IProfesor2Form;
  oForm: FormGroup<IProfesor2Form>;
  // validaciones de longitud
  lengthDni: number = 9;
  minLengthNombre: number = 2;
  maxLengthNombre: number = 12;
  minLengthApellido: number = 2;
  maxLengthApellido: number = 20;
  // modal
  idModal: string = "modalAvisoCreacion";

  constructor(
    private oRouter: Router,
    private oProfesorService: ProfesorService,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService
  ) {
    oSessionService.reload();
    this.oSessionService.checkSession().subscribe({
      next: (data: any) => {
        // Continúa cargando la página, no hace falta poner un método
      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }      
    })


    this.oProfesor = {} as IProfesor2Send;
    this.oProfesor2Form = {} as IProfesor2Form;
    this.oForm = {} as FormGroup<IProfesor2Form>;
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      dni: ['', [Validators.required, Validators.minLength(this.lengthDni), Validators.maxLength(this.lengthDni), Validators.pattern('([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])')]],
      nombre: ['', [Validators.required, Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]],
      apellido1: ['', [Validators.required, Validators.minLength(this.minLengthApellido), Validators.maxLength(this.maxLengthApellido)]],
      apellido2: ['', [Validators.minLength(this.minLengthApellido), Validators.maxLength(this.maxLengthApellido)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }

  onSubmit() {
    this.oProfesor = {
      dni: this.oForm.value.dni as string,
      nombre: this.oForm.value.nombre as string,
      apellido1: this.oForm.value.apellido1 as string,
      apellido2: this.oForm.value.apellido2 as string,
      email: this.oForm.value.email as string
    }
    if (this.oForm.valid) {
      this.oProfesorService.create(this.oProfesor).subscribe({
        next: (data: number) => {
          this.showModal(data);
        }
      })
    }
  }

  showModal(data: number): void {
    const modalAvisoCreacion = new bootstrap.Modal(document.getElementById(this.idModal), { //pasar el myModal como parametro
      keyboard: false
    });
    modalAvisoCreacion.show();
    this.oRouter.navigate(['/profesor', data, 'view'])
  }

}
