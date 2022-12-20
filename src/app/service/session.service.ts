import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, Subscription, Subject } from 'rxjs';
import { CryptoService } from './crypto.service';
import { DecodeService } from './decode.service';
import { baseURL, httpOptions } from 'src/environments/environment';
import { IProfesor, IProfesorBean } from '../model/profesor-interface';

@Injectable({
    providedIn: 'root'
})

export class SessionService {

    private entityURL = '/sesion';
    url: string = `${baseURL}${this.entityURL}`;
    subject = new Subject<any>();

    constructor(
        private oCryptoService: CryptoService,
        private oHttpClient: HttpClient,
        private oDecodeService: DecodeService
    ) { }

    login(profesorBean: IProfesorBean): Observable<IProfesor> {
        return this.oHttpClient.post<IProfesor>(this.url + "/login", profesorBean, httpOptions);
    }



    /*getUserName(): string {
        if (!this.isSessionActive()) {
            return "";
        } else {
            return this.oDecodeService.decode(this.getToken()).name;
        }
    }

    getToken(): string {
        return localStorage.getItem("token")!;
    }

    isSessionActive(): Boolean {
        if (this.getToken()) {
            let oDecodedToken = this.oDecodeService.decode(this.getToken());
            if (Date.now() >= oDecodedToken.exp * 1000) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem("token");
    }*/


}

/*export class EmitEvent {
    constructor(public name: any, public value?: any) {}
  }
  
  // this works like a communication channel
  export enum Events {
    login,
    logout
}*/