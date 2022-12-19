import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPage } from '../model/generic-types-interface';
import { IProfesor, IProfesor2Send } from '../model/profesor-interface';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private entityURL = '/profesor';
  private url: string = ""

  constructor(private oHttpClient: HttpClient) {
    this.url = `${environment.baseURL}${this.entityURL}`;
  }

  create(oProfesor: IProfesor2Send): Observable<number> {
    return this.oHttpClient.post<number>(this.url, oProfesor);
  }

  listarProfesores(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<IProfesor>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttpClient.get<IPage<IProfesor>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IProfesor> {
    return this.oHttpClient.get<IProfesor>(this.url + "/" + id);
  }

  delete(id: number): Observable<number> {
    return this.oHttpClient.delete<number>(this.url + "/" + id);
  }
}
