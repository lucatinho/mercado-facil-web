import { LocalStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../../apimercado.service';

@Component({
  selector: 'app-mercado-perfil',
  templateUrl: './mercado-perfil.component.html',
  styleUrls: ['./mercado-perfil.component.css']
})
export class MercadoPerfilComponent implements OnInit {

  infoMercado: any = [];

  isChecked = true;

  constructor(private apimercado: ApimercadoService,
              private location: Location,
              private localStorage: LocalStorageService,
              private router: Router) { }

  ngOnInit() {
     this.getInfoMercado()
  }

  OnSumbit(form){
    console.log(form.value)

    
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

load() {
    location.reload()
  } 

  mercadoAlterar(): void{
    this.router.navigate(['/mercado/alterar'])
  }

  mercadoFechar(): void{
    this.router.navigate(['/mercado/fechar'])
  }

  voltar(): void {
    
    this.router.navigate(['/']);
    this.localStorage.clear();
      
    /* this.load(); */
      
  }
  

}
