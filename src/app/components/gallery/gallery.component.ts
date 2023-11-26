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
  link12:string = 'https://cafeteria-nsmb.onrender.com/swagger-ui/index.html#/'
  projeto2:string = 'https://media.cnn.com/api/v1/images/stellar/prod/230518162326-01-us-parking-spots-restricted.jpg?c=original'
  title2:string = 'Vaga de estacionamento'
  description2:string = 'Parking spot ou Vaga de estacionamento foi feito destinado a cadastrar pessoa seu carro seu expectiva vaga. Tecnologia usada foi springboot usando springsecurity para apenas com o username admin e senha 12345678 possa acessa documentação e fazer post update e delete e o get foi feito com paginação e o banco de dados usado e o postgresql.'
  link2:string = 'https://park-rvud.onrender.com/swagger-ui/index.html?continue'
  projeto3:string = 'https://t2.tudocdn.net/687837?w=824&h=494'
  title3:string = 'Filmes e animes'
  description3:string = 'Filmes e site em desenvolvimento de filmes e animes.'
  link3:string = 'https://filmes-delta.vercel.app/'
  link31:string = 'https://wilflix.onrender.com/swagger-ui/index.html#/'
  constructor() {

  }

  ngOnInit(): void {

  }


}
