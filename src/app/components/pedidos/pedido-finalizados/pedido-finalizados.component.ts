import { VariablesService } from './../../variables.service';
import { Router } from '@angular/router';
import { PedidosService } from './../pedidos.service';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedidos.model';

@Component({
  selector: 'app-pedido-finalizados',
  templateUrl: './pedido-finalizados.component.html',
  styleUrls: ['./pedido-finalizados.component.css']
})
export class PedidoFinalizadosComponent implements OnInit {

  pedidos: any = []
  pedidosFormatado:any=[];

  displayedColumns = ['id', 'cliente', 'data', 'formaPagamento', 'situacao', 'action']

  constructor(private pedidoService: PedidosService,
              private router : Router,
              private variables: VariablesService,
              private headerService: HeaderService) {

    headerService.headerData = {
      title: 'Pedidos Finalizados',
      icon: 'storefront',
      routeUrl: 'pedido/finalizados'
    }
   }

  ngOnInit(): void {
    this.bancoPedidos();
  }

  bancoPedidos(){

    this.pedidoService.read().subscribe(pedidos => {
      let index2=0;
      this.pedidos = pedidos
    
      for (let index = 0; index < this.pedidos.length; index++) {
        if (this.pedidos[index].statusPedido.idStatusPedido == 4 || this.pedidos[index].statusPedido.idStatusPedido == 5 ) {
          this.pedidosFormatado[index2] = this.pedidos[index];
          index2++;
        }
        
      }
      console.log(pedidos)
    })

  }

  buscarPedidoUnico(idPedido){
    this.variables.postIdPedido(idPedido);
    console.log(idPedido);
  }
  
}
