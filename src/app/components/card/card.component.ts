import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  title:string = 'Ola, me chamo'
  description:string = 'William Rodrigues'
  paragraph:string = 'Sou dev de java spring boot , angular , python django e php laravel desenvolvedor a 2 anos.'
  Contact:string = 'Contato'
  photo:string = 'https://scontent.fqnv5-1.fna.fbcdn.net/v/t1.6435-9/123372752_689546285025764_7419566225712081602_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGCPUetzIgr-VJLNzmUnoOcsVXMKhnLnxKxVcwqGcufElI_zYbHFagdvZEc0mRBPIn8F3m6IGpOT9KOU0WgEbHJ&_nc_ohc=8xEDloLPSVIAX-kTnfT&_nc_ht=scontent.fqnv5-1.fna&oh=00_AfBgejD6VbHWM6b-7ie3H3gGhNLh32vtSZHa0RZ3GYdkAw&oe=659DEBA2'
  constructor() {

  }

  ngOnInit(): void {

  }

}
