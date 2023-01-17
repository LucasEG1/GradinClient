import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfesor } from 'src/app/model/profesor-interface';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { ProfesorService } from 'src/app/service/profesor.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.css']
})
export class GeneradorComponent implements OnInit {

  cantidadProfesores: number = 0;
  cantidadAsignaturas: number = 0;
  constructor(
    private oRouter: Router,
    private oSessionService: SessionService,
    private oProfesorService: ProfesorService,
    private oAsignaturaService: AsignaturaService,
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
  }

  ngOnInit(): void {
    this.oProfesorService.count().subscribe({
      next: (data: number) => {
        this.cantidadProfesores = data;
      }
    });
    this.oAsignaturaService.count().subscribe({
      next: (data: number) => {
        this.cantidadAsignaturas = data;
      }
    });
  }

  generarProfesores(cantidad: number) {
    this.oProfesorService.generate(cantidad).subscribe({
      next: (data: IProfesor[]) => {
        console.log(data);
        
        //this.reloadData();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  reloadData() {
    this.oProfesorService.count().subscribe({
      next: (data: number) => {
        this.cantidadProfesores = data;
      }
    });
    this.oAsignaturaService.count().subscribe({
      next: (data: number) => {
        this.cantidadAsignaturas = data;
      }
    });
  }

}
