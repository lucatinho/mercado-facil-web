import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../pedidos/pedidos.service';

@Component({
  selector: 'app-relatorio-total-venda',
  templateUrl: './relatorio-total-venda.component.html',
  styleUrls: ['./relatorio-total-venda.component.css']
})
export class RelatorioTotalVendaComponent implements OnInit {

  pedidos: any = []
  pedidosFormatado:any=[];
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
      // console.log("funcionou " + this.pedidosFormatado);
    })

  }
}
