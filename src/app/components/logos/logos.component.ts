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
  logo4:string = '../assets/python-svgrepo-com.svg'
  logo5:string = '../assets/django-svgrepo-com.svg'
  logo6:string = '../assets/wordpress.png'
  logo7:string = '../assets/react-1.svg'
  constructor() {

  }

  ngOnInit(): void {

  }

}
