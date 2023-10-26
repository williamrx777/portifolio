import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit{

  logo1:string = '../assets/angular-svgrepo-com.svg'
  logo2:string = '../assets/java-svgrepo-com.svg'
  logo3:string = '../assets/spring-icon-svgrepo-com.svg'

  constructor() {

  }

  ngOnInit(): void {

  }

}
