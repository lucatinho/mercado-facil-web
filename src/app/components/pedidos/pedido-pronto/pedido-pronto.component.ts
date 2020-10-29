import { HeaderService } from './../../template/header/header.service';
import { Router } from '@angular/router';
import { VariablesService } from './../../variables.service';
import { PedidosService } from './../pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-pronto',
  templateUrl: './pedido-pronto.component.html',
  styleUrls: ['./pedido-pronto.component.css']
})
export class PedidoProntoComponent implements OnInit {

  pedidos: any = []
  pedidosFormatado:any=[];

  displayedColumns = ['id', 'cliente', 'data', 'formaPagamento', 'situacao', 'action']

  constructor( private pedidoService: PedidosService,
    private variables: VariablesService,
    private router: Router, 
    private headerService: HeaderService ) {  

      headerService.headerData = {
        title: 'Pedidos Retirada',
        icon: 'storefront',
        routeUrl: 'pedido/pronto'
      }
    }

  ngOnInit(): void {

    this.pedidoService.read().subscribe(pedidos => {
      let index2=0;
      this.pedidos = pedidos
    
      for (let index = 0; index < this.pedidos.length; index++) {
        if (this.pedidos[index].statusPedido.idStatusPedido == 6 && this.pedidos[index].formaEnvio == "Retirada no mercardo") {
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
