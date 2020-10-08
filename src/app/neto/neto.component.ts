import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-neto',
  templateUrl: './neto.component.html',
  styleUrls: ['./neto.component.css']
})
export class NetoComponent implements OnInit {

  campoNeto: string;
  @Output() textoAtualizado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onEnviar() {
    this.textoAtualizado.emit(this.campoNeto);
  }

}
