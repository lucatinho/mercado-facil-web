import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImageService } from './../../image.service';
import { Router } from '@angular/router';
import { ApimercadoService } from './../../apimercado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercado-alterar',
  templateUrl: './mercado-alterar.component.html',
  styleUrls: ['./mercado-alterar.component.css']
})
export class MercadoAlterarComponent implements OnInit {


  result: any;
  infoMercado: any = [];

  // img
  imageTitle: string;
  imageDescription: string;
  imageFile: File = null;
  //  !img

  constructor(
    private apimercado: ApimercadoService,
    private imageService: ImageService,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.getInfoMercado()
  }

  OnSumbit(form) {
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

  mercadoAlterar() {
    console.log("ver: ", this.infoMercado);
    this.spinner.show();
  
    this.apimercado.putMercado(this.infoMercado).then((response: any) => {
      console.log("Funcionou Alterção = ", response);
      this.showMessage('Informações Alteradas com Sucesso !');

      this.result = response;

      this.spinner.hide();

      this.router.navigate(['/mercadoInfo']);

      
    })
      .catch((response) => {
        console.log("deu erro subcategora = ", response);
        this.result = response;
      });
  }

  imageInputChange(imageInput: any) {
    this.imageFile = imageInput.files[0];
  }

  addImage() {
    this.imageTitle = "Perfil mercado " + this.infoMercado.nome;
    this.imageDescription = "Perfil mercado";

    let infoObject = {
      title: this.imageTitle,
      description: this.imageDescription
    };
    this.spinner.show();

    console.log("img: ", this.imageFile);

    if (this.imageFile != null) {

    this.imageService.uploadImage(this.imageFile, infoObject).then((response: any) => {
      console.log("funcionou add img= ", response);
      this.result = response;
      this.infoMercado.picture = this.result.data.link;
      this.mercadoAlterar();
    })
      .catch((response) => {
        console.log("Erro add img = ", response);
        this.result = response;
        this.spinner.hide();
        alert("Erro ao carregar imagem, tente novamente mais tarde !")
      });
  } else {
    this.mercadoAlterar();
  }
}

  getInfoMercado() {
    // chama a tela de carregamento
    this.apimercado.getMercado()
      .then((response) => {
        this.infoMercado = response;
        console.log("banco infoMercado:", this.infoMercado);
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.infoMercado = response;
        console.log("banco infoMercado:", this.infoMercado);
        // fecha a tela de carregamento
      });
  }

  // mercadoAlterar(): void {
  //   this.router.navigate(['/mercado/alterar'])
  // }

  mercadoFechar(): void {
    this.router.navigate(['/mercado/fechar'])
  }

  voltar(): void {
    this.router.navigate(['/mercadoInfo']);
  }

}
