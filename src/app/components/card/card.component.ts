import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  title:string = 'Ola, me chamo'
  description:string = 'William Rodrigues'
  paragraph:string = 'Sou um desenvolvedor dedicado à evolução contínua, sempre buscando superar minhas limitações. Estou em constante atualização para aprimorar minhas habilidades e oferecer o melhor em minha profissão.'
  Contact:string = 'Contato'
  photo:string = './assets/perfil.jpg'
  constructor() {

  }

  ngOnInit(): void {

  }

}
