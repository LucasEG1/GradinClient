import { Component, Input, OnInit } from '@angular/core';
import { IAsignatura } from 'src/app/model/asignatura-interface';
import { AsignaturaService } from 'src/app/service/asignatura.service';

@Component({
  selector: 'app-asignatura-detail',
  templateUrl: './asignatura-detail.component.html',
  styleUrls: ['./asignatura-detail.component.css']
})
export class AsignaturaDetailComponent implements OnInit {
  @Input() id: number = 0;
  asignatura: IAsignatura = {} as IAsignatura;


  constructor(
    private oAsignaturaService: AsignaturaService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }
  getOne() {
    this.oAsignaturaService.getOne(this.id).subscribe({
      next: (data: IAsignatura) => {
        this.asignatura = data;
      }
    })
  }
}
