import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-asignatura-view',
  templateUrl: './asignatura-view.component.html',
  styleUrls: ['./asignatura-view.component.css']
})
export class AsignaturaViewComponent implements OnInit {
  id: number = 0;
  
  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService
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

    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }
}
