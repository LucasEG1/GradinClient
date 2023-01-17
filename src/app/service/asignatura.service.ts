import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL, httpOptions } from 'src/environments/environment';
import { IAsignatura, IAsignatura2Edit, IAsignatura2Send } from '../model/asignatura-interface';
import { IPage } from '../model/generic-types-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private entityURL = '/asignatura';
  private url: string = ""

  constructor(private oHttpClient: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  create(oAsignatura: IAsignatura2Send): Observable<number> {
    return this.oHttpClient.post<number>(this.url, oAsignatura, httpOptions);
  }

  update(oAsignatura: IAsignatura2Edit): Observable<IAsignatura> {
    return this.oHttpClient.put<IAsignatura>(this.url, oAsignatura, httpOptions);
  }

  listarAsignaturas(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<IAsignatura>> {
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
    return this.oHttpClient.get<IPage<IAsignatura>>(this.url, { withCredentials, headers, params: params });
  }

  getOne(id: number): Observable<IAsignatura> {
    return this.oHttpClient.get<IAsignatura>(this.url + "/" + id, httpOptions);
  }

  count(): Observable<number> {
    return this.oHttpClient.get<number>(this.url + "/count", httpOptions);
  }

  delete(id: number): Observable<number> {
    return this.oHttpClient.delete<number>(this.url + "/" + id, httpOptions);
  }
}
