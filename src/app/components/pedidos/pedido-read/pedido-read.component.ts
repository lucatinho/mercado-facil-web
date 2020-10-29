import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ApimercadoService } from './../../apimercado.service';
import { PedidosService } from './../pedidos.service';
import { Pedido } from './../pedidos.model';
import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../variables.service';

@Component({
  selector: 'app-pedido-read',
  templateUrl: './pedido-read.component.html',
  styleUrls: ['./pedido-read.component.css']
})
export class PedidoReadComponent implements OnInit {

  // pedidos: Pedido[]
  pedidos: any = []
  pedidosFormatado:any=[];

  result: any;

  displayedColumns = ['id', 'cliente', 'data', 'formaPagamento', 'situacao', 'action']

  constructor(private pedidoService: PedidosService,
              private apimercado: ApimercadoService,
              private spinner: NgxSpinnerService,
              private router: Router, 
              private variables: VariablesService) { }

  ngOnInit(): void {

    this.bancoPedidos();
    this.doRefresh();

    /* this.doRefresh(); */
  }


  bancoPedidos(){

    this.pedidoService.read().subscribe(pedidos => {
      let index2=0;
      this.pedidos = pedidos
      this.pedidos.sort((b, a) => a.dataPedido.localeCompare(b.dataPedido));
      this.spinner.show();
      for (let index = 0; index < this.pedidos.length; index++) {
        if (this.pedidos[index].statusPedido.idStatusPedido == 1) {
          this.pedidosFormatado[index2] = this.pedidos[index];
          index2++;
        }
      }
      this.spinner.hide();
     
      console.log("BANCO PEDIDOS",pedidos)
    })

  }

  doRefresh() {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.bancoPedidos();
      this.doRefresh();
    }, 120000);
  }

  buscarPedidoUnico(idPedido){
    this.variables.postIdPedido(idPedido);
    console.log(idPedido);
  }

  

}


