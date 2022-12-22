import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private oSessionService: SessionService,
    private oRouter: Router
  ) { 
    oSessionService.reload();
  }

  ngOnInit() {
    this.oSessionService.reload();
  }

}
