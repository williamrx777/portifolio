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
  description3:string = 'Site da GMR Equipamentos eletricos tecnologias usadas foi Wordpress.'
  link3:string = 'https://gmr.com.br/'
  projeto2:string = './assets/LOGO_GMR_50_ANOS.jpg'
  title2:string = 'GMR'
  description2:string = 'Lista de Ramais GMR Equipamentos eletricos tecnologias usadas'
  link2:string = 'https://953086e7-66b5-437b-b9f8-eab0dd2b73ba-00-1jkh5shfhi7q5.janeway.replit.dev/'
  projeto4:string = './assets/dolar&real&euro.jpg'
  title4:string = 'Cotação'
  description4:string = 'Ver dolar em real via grafico dinamico e o euro'
  link4:string = 'https://williamrx777-cotacao-app-qdsoys.streamlit.app/'
  constructor() {

  }

  ngOnInit(): void {

  }


}
