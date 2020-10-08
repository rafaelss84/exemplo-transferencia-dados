import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextoService {

  textoAtualizado = new Subject<string>();

  constructor() { }

  getTextoAtualizado() {
    return this.textoAtualizado.asObservable();
  }

  atualizaTexto(novoTexto: string) {
    this.textoAtualizado.next(novoTexto);
  }
}
