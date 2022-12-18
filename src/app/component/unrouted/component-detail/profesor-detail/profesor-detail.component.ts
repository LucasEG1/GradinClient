import { Component, Input, OnInit } from '@angular/core';
import { IProfesor } from 'src/app/model/profesor-interface';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-profesor-detail',
  templateUrl: './profesor-detail.component.html',
  styleUrls: ['./profesor-detail.component.css']
})
export class ProfesorDetailComponent implements OnInit {

  @Input() id: number = 0;
  profesor: IProfesor;


  constructor(
    private oProfesorService: ProfesorService,
  ) {
    this.profesor = {} as IProfesor;
   }

  ngOnInit(): void {
    this.getOne();
  }
  getOne() {
    this.oProfesorService.getOne(this.id).subscribe({
      next: (data: IProfesor) => {
        this.profesor = data;
        console.log(data);
      }
    })
  }

}
