import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  top:string = 'Latest work'
  projeto1:string ='https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png'
  title:string = 'Project title'
  description:string = 'UI, Art drection'
  constructor() {

  }

  ngOnInit(): void {

  }


}
