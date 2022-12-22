import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private oAuthService: SessionService,
    private oRouter: Router
  ) { }

  ngOnInit(): void {
    this.cerrarSesion();
  }

  cerrarSesion() {
    localStorage.removeItem('profesor');
    this.oAuthService.logout().subscribe({
      next: (data: any) => {
        localStorage.removeItem("profesor");
        this.oRouter.navigate(['']);
      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }
    })
  }

}
