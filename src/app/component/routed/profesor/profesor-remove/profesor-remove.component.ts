import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from 'src/app/service/profesor.service';
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
    private oActivatedRoute: ActivatedRoute,
    private oProfesorService: ProfesorService,
  ) {
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
