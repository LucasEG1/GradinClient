import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAsignatura, IAsignatura2Edit, IAsignatura2Form, IAsignatura2Send } from 'src/app/model/asignatura-interface';
import { IEntity } from 'src/app/model/generic-types-interface';
import { IProfesor } from 'src/app/model/profesor-interface';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { ProfesorService } from 'src/app/service/profesor.service';
import { SessionService } from 'src/app/service/session.service';

let bootstrap = require("bootstrap");
@Component({
  selector: 'app-asignatura-edit',
  templateUrl: './asignatura-edit.component.html',
  styleUrls: ['./asignatura-edit.component.css']
})
export class AsignaturaEditComponent implements OnInit {

  id: number;
  oAsignatura: IAsignatura2Edit;
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
    private oActivatedRoute: ActivatedRoute,
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
    this.id = oActivatedRoute.snapshot.params['id'];
    this.oAsignatura2Form = {} as IAsignatura2Form;
    this.oForm = {} as FormGroup<IAsignatura2Form>;
    this.oAsignatura2Send = {} as IAsignatura2Send;
    this.oProfesor = {} as IProfesor;
    this.oAsignatura = {} as IAsignatura2Edit;
    this.oProfesorIEntity = {} as IEntity;
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]],
      profesor: ['', [Validators.required]],
      isbnLibro: ['', [Validators.required, Validators.minLength(this.minLengthIsbn), Validators.maxLength(this.maxLengthIsbn)]]
    });
  }

  ngOnInit() {
    this.oAsignaturaService.getOne(this.id).subscribe({
      next: (data: IAsignatura) => {
        this.oProfesor = data.profesor;
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id],
          nombre: [data.nombre, [Validators.required, Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]],
          profesor: [data.profesor.id, [Validators.required]],
          isbnLibro: [data.isbnLibro, [Validators.required, Validators.minLength(this.minLengthIsbn), Validators.maxLength(this.maxLengthIsbn)]]
        });
      },
      error: (error: any) => {
        console.log(error); 
      }
    });
  }

  onSubmit() {
    this.oAsignatura = {
      id: this.oForm.value.id as number,
      nombre: this.oForm.value.nombre as string,
      profesor: {id: this.oForm.value.profesor as IProfesor},
      isbnLibro: this.oForm.value.isbnLibro as string
    }
    if (this.oForm.valid) {
      this.oAsignaturaService.update(this.oAsignatura).subscribe({
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
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.modalSeleccionProfesor.hide();
  }

}
