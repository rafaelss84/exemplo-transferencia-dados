import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  campoFilho: string = 'Campo filho original';
  @Output() textoAtualizado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onTextoAtualizado(novoTexto: string) {
    this.campoFilho = novoTexto;
    this.textoAtualizado.emit(this.campoFilho);
  }

}
