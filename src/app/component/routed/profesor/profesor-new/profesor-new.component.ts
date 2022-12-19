import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProfesor2Form, IProfesor2Send } from 'src/app/model/profesor-interface';
import { ProfesorService } from 'src/app/service/profesor.service';

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
  idModal: string = "idModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oRouter: Router,
    private oProfesorService: ProfesorService,
    private oFormBuilder: FormBuilder
  ) {
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
      dni: this.oForm.value.dni || "00000000A",
      nombre: this.oForm.value.nombre || "nombre",
      apellido1: this.oForm.value.apellido1 || "apellido1",
      apellido2: this.oForm.value.apellido2  || "Apellido2",
      email: this.oForm.value.email || "email"
    }
    if (this.oForm.valid) {
      this.oProfesorService.create(this.oProfesor).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "- Gradin -";
          this.modalContent = "Profesor " + data + " creado con éxito";
          //this.showModal(data);
        }
      })
    }
  }

  /*showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.idModal), { //pasar el myModal como parametro
      keyboard: false
    })
    const myModalEl = document.getElementById(this.idModal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/developer/view', data])
    })
    this.myModal.show()
  }*/

}
