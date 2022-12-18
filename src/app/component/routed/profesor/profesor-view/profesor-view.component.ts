import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesor-view',
  templateUrl: './profesor-view.component.html',
  styleUrls: ['./profesor-view.component.css']
})
export class ProfesorViewComponent implements OnInit {

  id: number = 0;
  
  constructor(
    private oActivatedRoute: ActivatedRoute,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
