import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../../apimercado.service';

@Component({
  selector: 'app-subcategoria-read',
  templateUrl: './subcategoria-read.component.html',
  styleUrls: ['./subcategoria-read.component.css']
})
export class SubcategoriaReadComponent implements OnInit {

  subcategoria: any = []

  displayedColumns = ['id', 'nome', 'action']

  constructor(private apimercado: ApimercadoService) { }

  ngOnInit() {
    this.readSubcategoria();
  }

  readSubcategoria() {
    // chama a tela de carregamento
    this.apimercado.getSubcategoria()
      .then((response) => {
        this.subcategoria = response;
        this.subcategoria.sort((a, b) => a.nomeSubCategoria.localeCompare(b.nomeSubCategoria));
        console.log("banco subcategora:", this.subcategoria);
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.subcategoria = response;
        console.log("erro banco subcategora:", this.subcategoria);
        // fecha a tela de carregamento
      });
  }
}
