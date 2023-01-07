import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
@Input()
foto:string=""
@Input()
titulo:string=""
@Input()
id:string="1"
  constructor() { }

  ngOnInit(): void {
  }

}
