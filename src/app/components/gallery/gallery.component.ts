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
  description:string = 'Cafeteria tecnologias usadas foi angular para frontend e o laravel para o backend.'
  link:string = 'https://cafeteria-alpha.vercel.app/'
  projeto3:string = 'https://t2.tudocdn.net/687837?w=824&h=494'
  title3:string = 'Filmes e animes'
  description3:string = 'Filmes tecnologias usadas foi angular para frontend e o django para o backend.'
  link3:string = 'https://filmes-delta.vercel.app/'
  constructor() {

  }

  ngOnInit(): void {

  }


}
