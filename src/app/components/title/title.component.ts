import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{

  title:string = 'Dev Fullstack'
  description:string = 'Tecnologias Angular , Python com Django e Flask e React. '

  constructor() {

  }

  ngOnInit(): void {

  }

}
