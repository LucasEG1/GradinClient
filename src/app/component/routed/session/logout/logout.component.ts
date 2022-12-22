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
    private oSessionService: SessionService,
    private oRouter: Router
  ) {
    oSessionService.reload();
    oSessionService.checkSession().subscribe({
      next: (data: any) => {
        // ok
      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }
    })
   }

  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.removeItem('profesor');
    this.oSessionService.logout().subscribe({
      next: (data: any) => {
        this.oSessionService.reload();
      },
      error: (error: any) => {
      }
    })
  }

}
