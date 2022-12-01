import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-teachers-plist',
  templateUrl: './teachers-plist.component.html',
  styleUrls: ['./teachers-plist.component.css']
})
export class TeachersPlistComponent implements OnInit {

  teachers = [{name: "paula", surname: "alvarez", class: 3},
              {name: "ramiro",surname: "vicente", class: 1},
              {name: "Luis", surname: "Molina",class: 2},
              {name: "Juan",surname: "Sánchez",class: 2},
              {name: "Eric",surname: "Cebrián",class: 3},
              {name: "Federico", surname: "Carrión",class: 5},
              {name: "Iván",surname: "Dueñas",class: 4},
              {name: "Noel",surname: "Gómez",class: 4},
              {name: "Alejandro",surname: "Huertas",class: 5},
              {name: "Javier",surname: "López",class: 1},
              {name: "Jorge",surname: "Martínez",class: 3}];

  constructor() { }

  ngOnInit(): void {
  }

}
