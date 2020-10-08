import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TextoService } from '../texto.service';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit, OnDestroy {

  campoPai: string = 'Campo pai original';
  private campoPaiSub: Subscription;

  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
    this.campoPaiSub = this.textoService.getTextoAtualizado()
      .subscribe(novoTexto => {
        this.campoPai = novoTexto;
      });
  }

  ngOnDestroy() {
    this.campoPaiSub.unsubscribe();
  }

}
