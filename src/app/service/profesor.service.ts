import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseURL, httpOptions } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPage } from '../model/generic-types-interface';
import { IProfesor, IProfesor2Send, IProfesorBean } from '../model/profesor-interface';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private entityURL = '/profesor';
  private url: string = ""

  constructor(private oHttpClient: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  create(oProfesor: IProfesor2Send): Observable<number> {
    return this.oHttpClient.post<number>(this.url, oProfesor, httpOptions);
  }

  update(oProfesor: IProfesor): Observable<number> {
    return this.oHttpClient.put<number>(this.url, oProfesor, httpOptions);
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
    //para no sobreescribir los params, se saca lo necesario (header, withCredentials)
    const { withCredentials, headers } = httpOptions;
    return this.oHttpClient.get<IPage<IProfesor>>(this.url, { withCredentials, headers, params: params });
  }

  getOne(id: number): Observable<IProfesor> {
    return this.oHttpClient.get<IProfesor>(this.url + "/" + id, httpOptions);
  }

  delete(id: number): Observable<number> {
    return this.oHttpClient.delete<number>(this.url + "/" + id, httpOptions);
  }
}
