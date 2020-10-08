import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TextoService } from '../texto.service';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit, OnDestroy {

  campoFilho: string = 'Campo filho original';
  private campoFilhoSub: Subscription;

  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
    this.campoFilhoSub = this.textoService.getTextoAtualizado()
      .subscribe(novoTexto => {
        this.campoFilho = novoTexto;
      });
  }

  ngOnDestroy() {
    this.campoFilhoSub.unsubscribe();
  }

}
