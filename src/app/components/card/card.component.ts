import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  title:string = 'Ola, me chamo'
  description:string = 'William Rodrigues'
  paragraph:string = 'Sou dev de java com spring boot e angular desenvolvedor a 1 ano 2 meses.'
  Contact:string = 'Contato'
  photo:string = 'https://scontent.fsdu22-1.fna.fbcdn.net/v/t1.6435-9/72040552_436213380359057_3979576135078903808_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=68be17&_nc_eui2=AeHY2qzTAjQRq0mURLTR8z8eTHAXG4M93atMcBcbgz3dq_9sOKAa-JaJ2BNQvJRI1Qx6UE2Tj05j2qHpi1aIfpIn&_nc_ohc=mOl_qvash84AX-nQfbm&_nc_ht=scontent.fsdu22-1.fna&oh=00_AfCHrvCXajbsOob2ZqnTr059K78h8JDogM6EObGfmHjUBw&oe=655E3CC7'
  constructor() {

  }

  ngOnInit(): void {

  }

}
