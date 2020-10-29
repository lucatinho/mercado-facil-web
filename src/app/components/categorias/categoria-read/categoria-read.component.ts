import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../../apimercado.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categorias: any = [];

  displayedColumns = ['id', 'nome', 'action']

  constructor(private apimercado: ApimercadoService,
              private router : Router) { }

  ngOnInit() {
    this.readCategorias();
  }

  readCategorias() {
    // chama a tela de carregamento
    this.apimercado.getCategoria()
      .then((response) => {
        this.categorias = response;
        this.categorias.sort((a, b) => a.nomeCategoria.localeCompare(b.nomeCategoria));
        console.log("banco categoria:", this.categorias);
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.categorias = response;
        // fecha a tela de carregamento
      });
  }


  update(id) {
    console.log('test: ', "/categoria/update/" + id)
    this.router.navigate(['/categoria/update/' + id])
    console.log('Navegando...')
  }

  delete(id) {
    console.log('test: ', "/categoria/update/" + id)
    this.router.navigate(['/categoria/update/' + id])
    console.log('Navegando...')
  }

}
