import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApimercadoService } from './../../apimercado.service';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  infoMercado: any = [];

  constructor(private headerService: HeaderService,
              private apimercado: ApimercadoService,
              private location: Location,
              private localStorage: LocalStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.getInfoMercado();
  }

  get title(): string {
    return this.headerService.headerData.title
  }
  get icon(): string {
    return this.headerService.headerData.icon
  }
  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }


  getInfoMercado() {

    //this.localStorage.retrieve('login');

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

  sair(): void {

    this.router.navigate(['/']);
    this.load();
    this.localStorage.clear();
      
    /* this.load(); */
      
  }
}
