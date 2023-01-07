import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  foto: string = "https://meups.com.br/wp-content/uploads/2022/07/Fall-Guys-2-900x503.jpg"
  @Input()
  titulo: string = "Minha Noticia Sobre meu projeto de lixo"
  @Input()
  descricao: string = "ENTRE EM CONTATO CASO QUERIRA SABER UM POUQUINHO MAIS SOBRE ESTE TAL PROJETO, OU COMO DIRIA O CHAPOLIN COLORADO:'SIGA-ME OS BONS'"
  constructor() { }

  ngOnInit(): void {
  }

}
