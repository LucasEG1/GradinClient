import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAsignatura, IAsignatura2Form, IAsignatura2Send } from 'src/app/model/asignatura-interface';
import { IProfesor } from 'src/app/model/profesor-interface';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { SessionService } from 'src/app/service/session.service';


let bootstrap = require("bootstrap");

@Component({
  selector: 'app-asignatura-new',
  templateUrl: './asignatura-new.component.html',
  styleUrls: ['./asignatura-new.component.css']
})
export class AsignaturaNewComponent implements OnInit {

  id: number = 0;
  oAsignatura: IAsignatura;
  oAsignatura2Send: IAsignatura2Send;
  oAsignatura2Form: IAsignatura2Form;
  oForm: FormGroup<IAsignatura2Form>;
  // validaciones de longitud
  minLengthNombre: number = 2;
  maxLengthNombre: number = 50;
  minLengthIsbn: number = 10;
  maxLengthIsbn: number = 13;
  // modal
  idModal: string = "modalAvisoCreacion";

  constructor(
    private oRouter: Router,
    private oAsignaturaService: AsignaturaService,
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
    this.oAsignatura = {} as IAsignatura;
    this.oAsignatura2Form = {} as IAsignatura2Form;
    this.oForm = {} as FormGroup<IAsignatura2Form>;
    this.oAsignatura2Send = {} as IAsignatura2Send;
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]],
      profesor: ['', [Validators.required]],
      isbnLibro: ['', [Validators.minLength(this.minLengthIsbn), Validators.maxLength(this.maxLengthIsbn)]]
    });
  }

  onSubmit() {
    this.oAsignatura2Send = {
      nombre: this.oForm.value.nombre as string,
      profesor: this.oForm.value.profesor as number,
      isbnLibro: this.oForm.value.isbnLibro as string
    }
    if (this.oForm.valid) {
      this.oAsignaturaService.create(this.oAsignatura2Send).subscribe({
        next: (data: number) => {
          this.showModal(data);
        }
      })
    }
  }

  showModal(data: number): void {
    const modalAvisoCreacion = new bootstrap.Modal(document.getElementById(this.idModal), {
      keyboard: false
    });
    modalAvisoCreacion.show();
    this.oRouter.navigate(['/Asignatura', data, 'view'])
  }

  cerrarModalSeleccion(id: number) {
    console.log(id);
    this.oForm.controls['profesor'].setValue(id);
  }

}
