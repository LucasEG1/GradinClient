import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAsignatura2Form, IAsignatura2Send } from 'src/app/model/asignatura-interface';
import { IEntity } from 'src/app/model/generic-types-interface';
import { IProfesor, IProfesor2Form } from 'src/app/model/profesor-interface';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { ProfesorService } from 'src/app/service/profesor.service';
import { SessionService } from 'src/app/service/session.service';


let bootstrap = require("bootstrap");

@Component({
  selector: 'app-asignatura-new',
  templateUrl: './asignatura-new.component.html',
  styleUrls: ['./asignatura-new.component.css']
})
export class AsignaturaNewComponent implements OnInit {

  oProfesor: IProfesor;
  oProfesorIEntity: IEntity;
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
  modalSeleccionProfesor: any;

  constructor(
    private oRouter: Router,
    private oAsignaturaService: AsignaturaService,
    private oFormBuilder: FormBuilder,
    private oProfesorService: ProfesorService,
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
    this.oAsignatura2Form = {} as IAsignatura2Form;
    this.oForm = {} as FormGroup<IAsignatura2Form>;
    this.oAsignatura2Send = {} as IAsignatura2Send;
    this.oProfesor = {} as IProfesor;
    this.oProfesorIEntity = {} as IEntity;
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]],
      profesor: ['', [Validators.required]],
      isbnLibro: ['', [Validators.required, Validators.minLength(this.minLengthIsbn), Validators.maxLength(this.maxLengthIsbn)]]
    });
  }

  onSubmit() {
    this.oAsignatura2Send = {
      nombre: this.oForm.value.nombre as string,
      profesor: this.oForm.value.profesor as IEntity,
      isbnLibro: this.oForm.value.isbnLibro as string
    }
    if (this.oForm.valid) {
      this.oAsignaturaService.create(this.oAsignatura2Send).subscribe({
        next: (data: number) => {
          this.showModal(data);
        },
        error: (error: any) => {
          console.log(error);
        }        
      })
    }
  }

  showModal(data: number): void {
    const modalAvisoCreacion = new bootstrap.Modal(document.getElementById(this.idModal), {
      keyboard: false
    });
    modalAvisoCreacion.show();
    this.oRouter.navigate(['/asignatura', data, 'view'])
  }

  abrirModalSeleccion(): void {
    this.modalSeleccionProfesor = new bootstrap.Modal(document.getElementById("modalSeleccionProfesor"), {
      keyboard: false
    });
    this.modalSeleccionProfesor.show();
  }

  cerrarModalSeleccion(idProfesor: number): void {
    this.oProfesorIEntity.id = idProfesor;
    this.oProfesorService.getOne(idProfesor).subscribe({
      next: (data: IProfesor) => {
        this.oProfesor = data;
        this.oForm.patchValue({
          profesor: this.oProfesorIEntity
        });
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.modalSeleccionProfesor.hide();
  }

}
