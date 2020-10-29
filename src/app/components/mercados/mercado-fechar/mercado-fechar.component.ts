import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ApimercadoService } from './../../apimercado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercado-fechar',
  templateUrl: './mercado-fechar.component.html',
  styleUrls: ['./mercado-fechar.component.css']
})
export class MercadoFecharComponent implements OnInit {

  infoMercado: any = [];
  result: any;

  constructor(private apimercado: ApimercadoService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

    ngOnInit() {
      this.getInfoMercado()
   }

   OnSumbit(form){
    console.log(form.value)

    //this.fecharMercado();
  }


  fecharMercado() {
    console.log("ver: ", this.infoMercado);

    let mercado: any = {
      
        idMercado: this.infoMercado.idMercado,
        nome: this.infoMercado.nome,
        nomeMercado: this.infoMercado.nomeMercado,
        situacao: this.infoMercado.situacao,
        picture: this.infoMercado.picture,
        observacao: this.infoMercado.observacao,
        horario: this.infoMercado.horario,
        url: this.infoMercado.url,
        freteMercado: this.infoMercado.freteMercado
    
    }

    console.log("ver: ", mercado);

    this.spinner.show();

    mercado.situacao = false;

    console.log("Depois de fechado: ", mercado);

    this.apimercado.putMercado(mercado).then((response: any) => {
      console.log("Funcionou Fechar = ", response);

      this.result = response;

      this.spinner.hide();

      this.router.navigate(['/mercadoInfo']);

      
    })
      .catch((response) => {
        console.log("deu erro subcategora = ", response);
        this.result = response;
      });
  }

  abrirMercado() {
    console.log("ver: ", this.infoMercado);

    let mercado: any = {
      
        idMercado: this.infoMercado.idMercado,
        nome: this.infoMercado.nome,
        nomeMercado: this.infoMercado.nomeMercado,
        situacao: this.infoMercado.situacao,
        picture: this.infoMercado.picture,
        observacao: this.infoMercado.observacao,
        horario: this.infoMercado.horario,
        url: this.infoMercado.url,
        freteMercado: this.infoMercado.freteMercado
    
    }

    console.log("ver: ", mercado);

    this.spinner.show();

    mercado.situacao = true;

    console.log("Depois de fechado: ", mercado);

    this.apimercado.putMercado(mercado).then((response: any) => {
      console.log("Funcionou Fechar = ", response);

      this.result = response;

      this.spinner.hide();

      this.router.navigate(['/mercadoInfo']);

      
    })
      .catch((response) => {
        console.log("deu erro subcategora = ", response);
        this.result = response;
      });
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

  mercadoFechar(): void{
    this.router.navigate(['/mercado/fechar'])
  }


  voltar(): void {
    this.router.navigate(['/mercadoInfo']);
  }
}
