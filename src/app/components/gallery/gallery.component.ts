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
  link2:string = 'https://projects-jhb3.onrender.com/ramais/'
  projeto4:string = './assets/LOGO_GMR_50_ANOS.jpg'
  title4:string = 'Chamado TI'
  description4:string = 'Sistema de chamados tecnologias usadas foi flask e postgres.'
  link4:string = 'https://chamado-ti.onrender.com/'
  projeto5:string = './assets/pinterest.jpg'
  title5:string = 'Pinterest'
  description5:string = 'Replica pinterest tecnologias usadas foi django e postgres.'
  link5:string = 'https://projects-jhb3.onrender.com/pinterest/login/'
  projeto6:string = './assets/logo_adote.png'
  title6:string = 'Adote um Pet'
  description6:string = 'Sistema de adoção de pets tecnologias usadas foi django e postgres.'
  link6:string = 'https://projects-jhb3.onrender.com/adote/usuario/logar/'
  projeto7:string = '🛍️'
  title7:string = 'Nossa Vitrine'
  description7:string = 'Site de ecommerce tecnologias usadas foi django e postgres.'
  link7:string = 'https://ecommerce-n4s3mtqsv-williamrx777s-projects.vercel.app/'
  constructor() {

  }

  ngOnInit(): void {

  }


}
