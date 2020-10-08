import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  campoPai: string = 'Campo pai original';

  constructor() { }

  ngOnInit(): void {
  }

  onTextoAtualizado(novoTexto: string) {
    this.campoPai = novoTexto;
  }

}
