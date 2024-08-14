import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  top:string = 'Latest work'
  projeto1:string ='./assets/ccrf.jpg'
  title:string = 'CCRF'
  description:string = 'Igreja CCRF tecnologias usadas foi angular para frontend e o django para o backend.'
  link:string = 'https://comunidaderompendoemfe.vercel.app/'
  projeto3:string = './assets/LOGO_GMR_50_ANOS.jpg'
  title3:string = 'GMR'
  description3:string = 'GMR Equipamentos eletricos tecnologias usadas foi Wordpress.'
  link3:string = 'https://gmr.com.br/'
  constructor() {

  }

  ngOnInit(): void {

  }


}
