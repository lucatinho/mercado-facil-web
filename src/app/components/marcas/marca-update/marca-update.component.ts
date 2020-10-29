import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { MarcaService } from './../marca.service';
import { ApimercadoService } from './../../apimercado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Marcas } from './../marcas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca-update',
  templateUrl: './marca-update.component.html',
  styleUrls: ['./marca-update.component.css']
})
export class MarcaUpdateComponent implements OnInit {

  marca: Marcas = {
    nomeMarca: '',
    imgMarca: ''
  }

  result: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private apimercado: ApimercadoService,
    private marcaService: MarcaService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.marcaService.readById(id).subscribe(marca => {
      this.marca = marca;
      console.log(this.marca)
    })
  }


  // updateMarca() {
  //   this.marcaService.update(this.marca).subscribe(() => {
  //     this.marcaService.showMessage('Produto atualizado')
  //     this.router.navigate(['/marcas']);
  //   })
  // }
  
  OnSubmit(form) {

    console.log("Status do formulario", form.status);

    if (form.status == "VALID") {

      this.updateMarca();  

    } else {
      this.apimercado.showMessage('Verifique o formulário !')
    }

    console.log("Valores do formulario", this.marca);

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

  updateMarca() {
    this.spinner.show();
    console.log("enviou: ", this.marca);

    this.apimercado.putMarca(this.marca).then((response: any) => {
      console.log("funcionou marca = ", response);
      this.result = response;
      this.spinner.hide();
      this.apimercado.showMessage('Marca alterada com sucesso!')
      this.router.navigate(['/marcas']);
    })
      .catch((response) => {
        console.log("deu erro marca = ", response);
        this.result = response;
        this.apimercado.showMessage('Ocorreu um erro!')
      });
  }


  cancel(): void {
    this.router.navigate(['/marcas']);
  }
}
