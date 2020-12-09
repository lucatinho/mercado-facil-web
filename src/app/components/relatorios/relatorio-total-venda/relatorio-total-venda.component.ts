import { Pedido } from './../../pedidos/pedidos.model';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../pedidos/pedidos.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

// import {FormControl} from '@angular/forms';
// import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-relatorio-total-venda',
  templateUrl: './relatorio-total-venda.component.html',
  styleUrls: ['./relatorio-total-venda.component.css']
})
export class RelatorioTotalVendaComponent implements OnInit {
  events1: string[] = [];
  events2: string[] = [];
  pedidosBaseFiltrado:any=[];

  pedidos: any = []
  /* Pedidos: Pedido[] */
  pedidosFormatado: any = [];

  constructor(private pedidoService: PedidosService,
    private headerService: HeaderService) {

    headerService.headerData = {
      title: 'Relatórios - Total de Vendas ',
      icon: 'list_alt',
      routeUrl: '/relatorio-venda-total'
    }
  }

  ngOnInit(): void {
    this.bancoPedidos();
  }

  addEventInitial(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events1 = [];
    this.events1.push(`${type}: ${event.value}`);
    console.log(this.events1)
  }
  addEventFinal(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events2 = [];
    this.events2.push(`${type}: ${event.value}`);
    console.log(this.events2)
  }

  // filtra por data 
  filtrar() {
    console.log("entrou");
    let index2 = 0;
    for(let index = 0; index < this.pedidosBaseFiltrado.length; index++) {
      console.log(this.events1 + " <= " + this.pedidosBaseFiltrado[index].dataPedido + " >= "+ this.events2);
      if(this.events1 <= this.pedidosBaseFiltrado[index].dataPedido && this.pedidosBaseFiltrado[index].dataPedido >= this.events2 ){
        this.pedidosFormatado[index2] = this.pedidosBaseFiltrado[index];
        index2++;
        console.log("entrou no if");
      }
    }
  }

  // pega o banco 
  bancoPedidos() {
    this.pedidoService.read().subscribe(pedidos => {
      let index2 = 0;
      this.pedidos = pedidos

      for (let index = 0; index < this.pedidos.length; index++) {
        if (this.pedidos[index].statusPedido.idStatusPedido == 4) {
          this.pedidosFormatado[index2] = this.pedidos[index];
          index2++;
        }

      }
      this.pedidosBaseFiltrado = this.pedidosFormatado;
      /* console.log("funcionou " + this.pedidosFormatado); */
    })
  }
}
