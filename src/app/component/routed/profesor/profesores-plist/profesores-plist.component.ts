import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { IProfesor } from 'src/app/model/profesor-interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profesores-plist',
  templateUrl: './profesores-plist.component.html',
  styleUrls: ['./profesores-plist.component.css']
})
export class ProfesoresPlistComponent implements OnInit {

  responseFromServer: IPage<IProfesor> = <IPage<IProfesor>;
  //
  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  profesores = [{name: "paula", surname: "alvarez", class: 3},
              {name: "ramiro",surname: "vicente", class: 1},
              {name: "Luis", surname: "Molina",class: 2},
              {name: "Juan",surname: "Sánchez",class: 2},
              {name: "Eric",surname: "Cebrián",class: 3},
              {name: "Federico", surname: "Carrión",class: 5},
              {name: "Iván",surname: "Dueñas",class: 4},
              {name: "Noel",surname: "Gómez",class: 4},
              {name: "Alejandro",surname: "Huertas",class: 5},
              {name: "Javier",surname: "López",class: 1},
              {name: "Jorge",surname: "Martínez",class: 3}];

  constructor(
    private oProfesorService: ProfesorService
  ) { }

  ngOnInit(): void {
  }

  getPage() {
    this.oProfesorService.getTeacherPage()
    .subscribe({
      next: (resp: IPage<IProfesor>) => {
        this.responseFromServer = resp;
        if (this.page > resp.totalPages - 1) {
          this.page = resp.totalPages - 1;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

}
