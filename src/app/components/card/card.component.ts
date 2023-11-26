import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  title:string = 'Ola, me chamo'
  description:string = 'William Rodrigues'
  paragraph:string = 'Sou dev de java com spring boot desenvolvedor a 1 ano 4 meses.'
  Contact:string = 'Contato'
  photo:string = 'https://scontent.fqnv5-1.fna.fbcdn.net/v/t39.30808-6/217553092_828481401132251_8388150708981078787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Uo32FHFt67IAX8XFnWv&_nc_ht=scontent.fqnv5-1.fna&oh=00_AfCUCOAk6P-rKE9vRL4VAt0onGKSq_RTxdTc89GmtjZ-xQ&oe=65695E94'
  constructor() {

  }

  ngOnInit(): void {

  }

}
