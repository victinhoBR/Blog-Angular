import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {
  @Input()
  foto: string = ""
  @Input()
  titulo: string = ""
  @Input()
  descricao: string = ""
  @Input()
  id: string = "0"
  constructor() { }

  ngOnInit(): void {
  }

}
