import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-profesor-view',
  templateUrl: './profesor-view.component.html',
  styleUrls: ['./profesor-view.component.css']
})
export class ProfesorViewComponent implements OnInit {

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
