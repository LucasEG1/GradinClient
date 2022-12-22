import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfesor } from 'src/app/model/profesor-interface';
import { ProfesorService } from 'src/app/service/profesor.service';
import { SessionService } from 'src/app/service/session.service';
let bootstrap = require('bootstrap');

@Component({
  selector: 'app-profesor-remove',
  templateUrl: './profesor-remove.component.html',
  styleUrls: ['./profesor-remove.component.css']
})
export class ProfesorRemoveComponent implements OnInit {

  id: number = 0;
  msg: string = '';
  
  constructor(
    private oLocation: Location,
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oProfesorService: ProfesorService,
    private oSessionService: SessionService
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
  }

  ngOnInit(): void {
  }

  eliminar() {
    this.oProfesorService.delete(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Profesor " + this.id + " eliminado";
        const myModal = new bootstrap.Modal('#modalConfirmacion', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }
}
