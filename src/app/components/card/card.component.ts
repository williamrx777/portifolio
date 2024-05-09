import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  title:string = 'Ola, me chamo'
  description:string = 'William Rodrigues'
  paragraph:string = 'Sou dev de java spring boot , angular , python django e nodejs desenvolvedor a 2 anos.'
  Contact:string = 'Contato'
  photo:string = 'https://media.licdn.com/dms/image/C4E03AQG_RCnOrGYRpA/profile-displayphoto-shrink_800_800/0/1607630829179?e=1720656000&v=beta&t=IXSWdpis2cj0BzLaqjoGL2NN85zh4uf9mbePYVL6LHk'
  constructor() {

  }

  ngOnInit(): void {

  }

}
