import { MatSnackBar } from '@angular/material/snack-bar';
import { VariablesService } from './../../variables.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImageService } from './../../image.service';
import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../../apimercado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategoria-create',
  templateUrl: './subcategoria-create.component.html',
  styleUrls: ['./subcategoria-create.component.css']
})
export class SubcategoriaCreateComponent implements OnInit {

  subcategora: any = {
    nomeSubCategoria: '',
    imgSubCategoria:''

  }

  result: any;

    // img
    imageTitle: string;
    imageDescription: string;
    imageFile: File;
    //  !img

  constructor(private apimercado: ApimercadoService,
              private imageService: ImageService,
              private spinner: NgxSpinnerService,
              private snackBar: MatSnackBar,
              private variables: VariablesService,
              private Router: Router) { }

  ngOnInit(): void {
  }

  OnSumbit(form){
    console.log(form.value)

    this.addImage();
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


  imageInputChange(imageInput: any) {
    this.imageFile = imageInput.files[0];
  }
  addImage() {

   
    this.imageTitle = "Produto " + this.variables.getSessao().infoMercado.nomeMercado;
    this.imageDescription = "Produto";

    let infoObject = {
      title: this.imageTitle,
      description: this.imageDescription
    };

    console.log("img: ", this.imageFile);

    
    this.spinner.show();
    this.imageService.uploadImage(this.imageFile, infoObject).then((response: any) => {
      console.log("funcionou add img= ", response);
      this.result = response;
      this.subcategora.imgSubCategoria = this.result.data.link;

      
      this.createSubcategoria();
      
    })
      .catch((response) => {
        console.log("Erro add img = ", response);
        this.result = response;
        this.spinner.hide();
        alert("Erro ao carregar imagem, tente novamente mais tarde !")
      });
  }

  createSubcategoria() {
    this.apimercado.postSubcategoria(this.subcategora).then((response: any) => {
      console.log("funcionou subcategora = ", response);
      this.apimercado.showMessage("Operação realizada com Sucesso!")
      this.Router.navigate(['/categoria'])

      this.result = response;
    })
      .catch((response) => {
        console.log("deu erro subcategora = ", response);
        this.result = response;
        this.apimercado.showMessage("Ocorreu um erro!")
      });
  }

  cancel(): void {
    this.Router.navigate(['/subCategoria'])
  }
}
