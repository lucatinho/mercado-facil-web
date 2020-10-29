import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../../apimercado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})


export class CategoriaCreateComponent implements OnInit {

  // teste

  // teste
  formatarSubcategoria: any = [];
  subcategoria: any = [];

  result: any;

  categoria: any = {
    nomeCategoria: '',
    imgCategoria: ''
  }

  subcategoriaEnviar: any = [];
  checkbox: boolean;
  contador: any = 0;

  constructor(private apimercado: ApimercadoService,
              private spinner: NgxSpinnerService,
              private snackBar: MatSnackBar,
              private Router: Router) { }

  ngOnInit(): void {
    this.readSubcategoria();
  }

  showMessage(msg: string,
    ): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: ['msg-success']
    })

  }

  OnSumbit(form){
    console.log(form.value)

    this.createCategoria();
  }

  postCheckbox(checkbox, idSubCategoria) {
    console.log(checkbox, idSubCategoria);
    if (checkbox == true) {
      this.subcategoriaEnviar.push(idSubCategoria)
      console.log("entrou")
    } else {
      var index = this.subcategoriaEnviar.indexOf(idSubCategoria);
      this.subcategoriaEnviar.splice(index, 1)
    }
    console.log("test: ", this.categoria)
  }

  createCategoria() {
    let categoria = {
      nomeCategoria: this.categoria.nomeCategoria,
      imgCategoria: this.categoria.imgCategoria,
      status: true,
      subCategoria: this.subcategoriaEnviar
    }
     this.spinner.show(); 
    console.log("enviar: ", categoria);

    this.apimercado.postCategoria(categoria).then((response: any) => {
      console.log("funcionou categoria = ", response);
       
      this.showMessage("Categoria cadastrada com Sucesso!")
      this.Router.navigate(['/categoria'])
      this.result = response;
      this.modifySubCategoria();

      this.spinner.hide();
    })
      .catch((response) => {
        this.spinner.hide();
        console.log("deu erro categoria = ", response);
        this.result = response;
      });
  }

  modifySubCategoria() {
    let formatada = {};
    for (let index = 0; index < this.subcategoriaEnviar.length; index++) {
      this.subcategoriaEnviar[index].use = true;
      formatada = this.subcategoriaEnviar[index]

      console.log("modificação: ", formatada);

      this.apimercado.putSubcategoria(formatada).then((response: any) => {
        console.log("funcionou subCategoria = ", response);
        this.result = response;
      })
        .catch((response) => {
          console.log("deu erro subCategoria = ", response);
          this.result = response;
        });
    }
  }

  readSubcategoria() {
    // chama a tela de carregamento
    this.apimercado.getSubcategoria()
      .then((response) => {
        this.formatarSubcategoria = response;
        let index2 = 0
        for (let index = 0; index < this.formatarSubcategoria.length; index++) {
          if (this.formatarSubcategoria[index].use == false) {
            this.subcategoria[index2] = this.formatarSubcategoria[index]
            this.subcategoria[index2].completed = false
            index2++;
          }
        }
        // this.subcategoria.sort((a, b) => a.nomeSubCategoria.localeCompare(b.nomeSubCategoria));
        console.log("banco subcategora:", this.subcategoria);
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.subcategoria = response;
        console.log("erro banco subcategora:", this.subcategoria);
        // fecha a tela de carregamento
      });
  }

  cancel(): void {
    this.Router.navigate(['/categoria'])
  }

}
