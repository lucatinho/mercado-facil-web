import { Pedido } from './../pedidos.model';
import { Router } from '@angular/router';
import { HeaderService } from './../../template/header/header.service';
import { VariablesService } from './../../variables.service';
import { PedidosService } from './../pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-enviado',
  templateUrl: './pedido-enviado.component.html',
  styleUrls: ['./pedido-enviado.component.css']
})
export class PedidoEnviadoComponent implements OnInit {

  pedidos: any = []
  pedidosFormatado:any=[];

  displayedColumns = ['id', 'cliente', 'data', 'formaPagamento', 'situacao', 'action']

  constructor( private pedidoService: PedidosService,
               private variables: VariablesService,
               private router: Router, 
               private headerService: HeaderService) {

                headerService.headerData = {
                  title: 'Pedidos Enviados',
                  icon: 'storefront',
                  routeUrl: 'pedido/enviado'
                }

                }

  ngOnInit(): void {

    this.pedidoService.read().subscribe(pedidos => {
      let index2=0;
      this.pedidos = pedidos
    
      for (let index = 0; index < this.pedidos.length; index++) {
        if (this.pedidos[index].statusPedido.idStatusPedido == 3 && this.pedidos[index].formaEnvio == "Entrega") {
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

/* top(){
  let pedidos: Pedido = {
    idPedido: this.pedido.idPedido,
    cliente: {
      idCliente: this.pedido.cliente.idCliente
    },
    mercados: {
      idMercado: this.pedido.mercados.idMercado
    },
    formaPagamento: this.pedido.formaPagamento,
    formaEnvio: this.pedido.formaEnvio,
    dataPedido: this.pedido.dataPedido,
    statusPedido: {
      idStatusPedido: null,
    },
    pedidoProdutos: this.pedido.pedidoProdutos
    
  }


  if (this.produto.formaEnvio == "Entrega") {
    this.pedidos.statusPedido.idStatusPedido = 3
  }else{
    this.pedidos.statusPedido.idStatusPedido = 6
  }
  
} */


