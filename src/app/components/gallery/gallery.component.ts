import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  top:string = 'Latest work'
  projeto1:string ='https://img.freepik.com/vetores-premium/logotipo-vintage-para-comida-e-bebida-do-restaurante_116238-69.jpg'
  title:string = 'Caferia'
  description:string = 'Cafeteria foi feito para uma pessoa em ambiente presencial adiciona suas vendas. Tecnologias usadas foi angular para frontend e o springboot para o backend.'
  link:string = 'https://cafeteria-alpha.vercel.app/'
  constructor() {

  }

  ngOnInit(): void {

  }


}
