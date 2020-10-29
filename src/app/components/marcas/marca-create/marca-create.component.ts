import { ApimercadoService } from './../../apimercado.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MarcaService } from './../marca.service';
import { Component, OnInit } from '@angular/core';
import { Marcas } from '../marcas.model';

@Component({
  selector: 'app-marca-create',
  templateUrl: './marca-create.component.html',
  styleUrls: ['./marca-create.component.css']
})
export class MarcaCreateComponent implements OnInit {


  /*marca: Marcas = {
    nomeMarca: ""
  }*/

  marca: Marcas = {
    nomeMarca: '',
    imgMarca:''

  }

  result:any;

  constructor(private MarcaService : MarcaService,
              private apimercado: ApimercadoService,
              private spinner: NgxSpinnerService,
              private snackBar: MatSnackBar,
              private Router: Router
              ) { }

  ngOnInit(): void {
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

    this.createMarca();
  }



  createMarca(){
    
    /*let marca: Marcas = {
      nomeMarca: '',
      imgMarca:''

    }*/

    this.spinner.show();

    this.MarcaService.create(this.marca).then((response: any) => {
      console.log("funcionou marca", response);
      this.result = response;
      this.spinner.hide();
      this.apimercado.showMessage('Marca Cadastrada com sucesso!')
      this.Router.navigate(['/marcas'])
    })
    .catch((response) => {
      this.spinner.hide();
      console.log("deu erro marca = ", response);
      this.result = response;
    });
  }

  /*createMarca(): void {
      this.MarcaService.create(this.marca).subscribe(() => {
       this.MarcaService.showMessage('Produto Criado Sucesso !')
       this.Router.navigate(['/marcas'])
     })

   }*/


   cancel(): void {
    this.Router.navigate(['/marcas'])

  }
}
