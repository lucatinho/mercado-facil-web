import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-crud',
  templateUrl: './pedidos-crud.component.html',
  styleUrls: ['./pedidos-crud.component.css']
})
export class PedidosCrudComponent implements OnInit {

  constructor(private router : Router, 
              private headerService: HeaderService) {

    headerService.headerData = {
      title: 'Pedidos',
      icon:'storefront',
      routeUrl:'/pedidos'
    }
   }
  ngOnInit(): void {
  }


  navigateToSeparacao(): void{
    this.router.navigate(['/pedido/separacao'])
    console.log('Navegando...')
  }
  navigateToFinalizados(): void{
    this.router.navigate(['/pedido/finalizados'])
    console.log('Navegando...')
  }
}
