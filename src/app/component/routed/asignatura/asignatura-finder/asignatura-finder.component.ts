import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IAsignatura } from 'src/app/model/asignatura-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-asignatura-finder',
  templateUrl: './asignatura-finder.component.html',
  styleUrls: ['./asignatura-finder.component.css']
})
export class AsignaturaFinderComponent implements OnInit {

  @Output() idSeleccionado = new EventEmitter<number>();

  responseFromServer: IPage<IAsignatura>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oAsignaturaService: AsignaturaService,
    private oSessionService: SessionService,
    private oRouter: Router
  ) {
    oSessionService.reload();
    this.oSessionService.checkSession().subscribe({
      next: (data: any) => {
        this.getPage();
      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }      
    })
    this.responseFromServer = {} as IPage<IAsignatura>;
  }

  ngOnInit(): void {

  }

  getPage() {
    this.oAsignaturaService.listarAsignaturas(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<IAsignatura>) => {
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

  seleccionarId(id: number) {
    this.idSeleccionado.emit(id);
  }
}
