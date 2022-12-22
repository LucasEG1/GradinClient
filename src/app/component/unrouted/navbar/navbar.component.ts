import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/user-interface';
import { SessionService } from 'src/app/service/session.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;
  isSuperuser: boolean = false;
  loggedUser: string = '';

  constructor(
    private oSessionService: SessionService,
    private oRouter: Router
  ) {
    this.oSessionService.subject.subscribe({
      next: () => {
        this.oSessionService.checkSession().subscribe({
          next: (data: IUser) => {
            this.isLogged = true;
            this.loggedUser = data.dni;
            this.isSuperuser = data.superuser;
          },
          error: (error: any) => {
            this.isLogged = false;
            this.loggedUser = '';
            this.isSuperuser = false;
           }
        })
      },
      error: (error: any) => { }
    });
  }

  ngOnInit(): void {
  }




}
