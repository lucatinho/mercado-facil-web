import { MatSnackBar } from '@angular/material/snack-bar';
import { VariablesService } from './../../variables.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Categoria } from './../categoria.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../../apimercado.service';

@Component({
  selector: 'app-categoria-uptade',
  templateUrl: './categoria-uptade.component.html',
  styleUrls: ['./categoria-uptade.component.css']
})
export class CategoriaUptadeComponent implements OnInit {

  UpadateUrl = "https://apimercado-central.herokuapp.com/api/mercado1/categoria"
  // visual
  Categoria: any = {
    nomeCategoria: '',
    imgCategoria: '',
    subCategoria:[{
      idSubCategoria:''
    }]
  }
  allSubcategoria: any = [];
  // !visual

  formatarAllSubcategoria: any = [];

  result: any;

  subcategoriaEnviar: any = [];
  subcategoriaCategoria: any = [];
  checkbox: boolean;



  constructor(
    private apimercado: ApimercadoService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private variables: VariablesService,
    private http: HttpClient,
    private Router: Router) { }

  ngOnInit(): void {
    

    this.categoriaId();
    this.readAllSubcategoria();


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
    

    this.updateCategoria();

    
  }

  categoriaId() {
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.spinner.show();
    this.readById(id).subscribe(Categoria => {
      this.Categoria = Categoria;
      // coloca a cheackbox em true
      for (let index = 0; index < this.Categoria.subCategoria.length; index++) {
        this.Categoria.subCategoria[index].completed = true
      }

      this.spinner.hide();
     
    })
  }

  // categoriaId() {
  //   this.listarCategoriasId()
  //     .then((response) => {
  //       this.Categoria = response;
  //       // coloca a cheackbox em true
  //       for (let index = 0; index < this.Categoria.subCategoria.length; index++) {
  //         this.Categoria.subCategoria[index].completed = true
  //       }
  //     })
  //     .catch((response) => {
  //       this.Categoria = response;
  //     });
  // }


  // todas as subcategorias
  readAllSubcategoria() {
    // chama a tela de carregamento
    this.apimercado.getSubcategoria()
      .then((response) => {
        this.formatarAllSubcategoria = response;

        let index2 = 0
        for (let index = 0; index < this.formatarAllSubcategoria.length; index++) {
          // filtro categorias sem uso 
          if (this.formatarAllSubcategoria[index].use == false) {
            this.allSubcategoria[index2] = this.formatarAllSubcategoria[index]
            this.allSubcategoria[index2].completed = false
            index2++;
          }
        }
        
        console.log("todas subcategorias: ", this.allSubcategoria)
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.formatarAllSubcategoria = response;
        console.log("erro banco subcategora:", this.formatarAllSubcategoria);
        // fecha a tela de carregamento
      });
  }

  ajeitando() {

    this.subcategoriaEnviar = this.Categoria.subCategoria;

    console.log("banco subcategora:", );
  }

  postCheckbox(checkbox, subCategoria) {
    console.log("cima: ", checkbox, subCategoria);
    if (checkbox != true) {
      this.subcategoriaCategoria.push(subCategoria)
      console.log("entrou")
    } else {
      var index = this.subcategoriaCategoria.indexOf(subCategoria);
      this.subcategoriaCategoria.splice(index, 1)
    }
    console.log("post1: ", this.subcategoriaCategoria)
  }

  postCheckbox2(checkbox, subCategoria) {
    console.log("baixo: ", checkbox, subCategoria);
    if (checkbox == true) {
      this.subcategoriaEnviar.push(subCategoria)
      console.log("entrou")
    } else {
      var index = this.subcategoriaEnviar.indexOf(subCategoria);
      this.subcategoriaEnviar.splice(index, 1)
    }
    console.log("post2: ", this.subcategoriaEnviar)
    console.log("categoria: ", this.Categoria)
  }



  updateCategoria() {
    // console.log("antes: ", this.subcategoriaCategoria)
    console.log("categoria: ", this.Categoria.subCategoria)

    if (this.subcategoriaCategoria.length == 0) {
      
      for (let index = 0; index < this.Categoria.subCategoria.length; index++) {
        this.subcategoriaEnviar.push(this.Categoria.subCategoria[index])
        console.log("aaa: ", this.Categoria.subCategoria[index])
      }

    }
    // else{
    //   for (let index = 0; index < this.Categoria.subCategoria.length; index++) {
    //    for (let index2 = 0; index <  this.subcategoriaCategoria.length; index2++) {
    //      if (this.Categoria.subCategoria[index].idSubCategoria == this.subcategoriaCategoria[index2]) {
    //       this.subcategoriaEnviar.push(this.Categoria.subCategoria[index])
    //       console.log("bbb: ", this.Categoria.subCategoria[index])
    //      }
    //    }
    //   }
    // }

   

    let categoria = {
      idCategoria: this.Categoria.idCategoria,
      nomeCategoria: this.Categoria.nomeCategoria,
      imgCategoria: this.Categoria.imgCategoria,
      status: true,
      subCategoria: this.subcategoriaEnviar
    }
    console.log("enviar: ", categoria);

    

    this.apimercado.putCategoria(categoria).then((response: any) => {
      console.log("funcionou categoria = ", response);
      
      this.showMessage("Categoria alterada com Sucesso!")
      
      this.Router.navigate(['/categoria'])
      this.result = response;
    this.modifySubCategoria();
    })
      .catch((response) => {
        console.log("deu erro categoria = ", response);
        this.result = response;
      });
  }
  modifySubCategoriaCategoria() {
    let formatada = {};
    for (let index = 0; index < this.subcategoriaCategoria.length; index++) {
      this.subcategoriaCategoria[index].use = false;
      formatada = this.subcategoriaCategoria[index]

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



  /* listarCategoriasId() {
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link rede

    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const catUrl = `${url}${mercado}/categoria/`


    let url = 'https://apimercado-central.herokuapp.com/api/mercado1/categoria/13';
    return this.http.get(catUrl, { headers }).toPromise();
  } */

  readById(idCategoria: number) {

    let username = 'servo'
    let password = '123'

    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const catUrl = `${url}${mercado}/categoria/${idCategoria}`

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.http.get<Categoria>(catUrl, { headers })
  }

  cancel(): void {
    this.Router.navigate(['/categoria']);
  }

}
