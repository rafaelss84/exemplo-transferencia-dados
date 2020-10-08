import { Component, OnInit } from '@angular/core';
import { TextoService } from '../texto.service';

@Component({
  selector: 'app-neto',
  templateUrl: './neto.component.html',
  styleUrls: ['./neto.component.css']
})
export class NetoComponent implements OnInit {

  campoNeto: string;

  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
  }

  onEnviar() {
    this.textoService.atualizaTexto(this.campoNeto);
  }

}
