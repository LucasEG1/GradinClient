import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { IProfesor } from 'src/app/model/profesor-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ProfesorService } from 'src/app/service/profesor.service';
import { SessionService } from 'src/app/service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor-plist',
  templateUrl: './profesor-plist.component.html',
  styleUrls: ['./profesor-plist.component.css']
})
export class ProfesoresPlistComponent implements OnInit {

  responseFromServer: IPage<IProfesor>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oProfesorService: ProfesorService,
    private oSessionService: SessionService,
    private oRouter: Router
  ) {
    this.responseFromServer = {} as IPage<IProfesor>;
  }

  ngOnInit(): void {
    /*this.oSessionService.checkSession().subscribe({
      next: (data: any) => {
        this.getPage();
      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }      
    })*/
    this.getPage();
  }

  getPage() {
    this.oProfesorService.listarProfesores(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
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
  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

}
