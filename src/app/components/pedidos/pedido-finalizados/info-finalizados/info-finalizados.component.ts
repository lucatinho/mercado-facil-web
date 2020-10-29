import { VariablesService } from './../../../variables.service';
import { ApimercadoService } from './../../../apimercado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidosService } from './../../pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-finalizados',
  templateUrl: './info-finalizados.component.html',
  styleUrls: ['./info-finalizados.component.css']
})
export class InfoFinalizadosComponent implements OnInit {

  panelOpenState = false;

  displayedColumns = ['id', 'nomeProduto', 'marcaProduto', 'valorUni', 'qtdProduto']

  pedido: any = [];
  enderecoFormatado: any = []
  result: any;

  totalpedido: number = 0;
  idPedido: any;

  constructor(
    private pedidoService: PedidosService,
    private router: Router,
    private route: ActivatedRoute,
    private apimercado: ApimercadoService,
    private variables: VariablesService
  ) { }

  ngOnInit(): void {

    this.banco();
  }

  getTotalPedido() {
    for (let index = 0; index < this.pedido.pedidoProdutos.length; index++) {
      console.log("valor uni :", this.pedido.pedidoProdutos[index].valorUni, "qtd :", this.pedido.pedidoProdutos[index].qtdProduto)
      this.totalpedido = this.totalpedido + (this.pedido.pedidoProdutos[index].valorUni * this.pedido.pedidoProdutos[index].qtdProduto)
    };
  }

  banco() {
    this.apimercado.getPedidos()
      .then((response) => {
        this.idPedido = this.variables.getIdPedido();
        this.pedido = response;

        for (let index = 0; index < this.pedido.length; index++) {
          if (this.pedido[index].idPedido == this.idPedido) {
            this.pedido = this.pedido[index];
            console.log("entrou:", this.pedido);
            this.getTotalPedido();
            
          }
        };
        this.bancoEndereco();
      })
      .catch((response) => {
        this.pedido = response;
      });
  }

  bancoEndereco(){

    let index2 = 0;
    
    for (let index = 0; index < this.pedido.cliente.endereco.length; index++) {
      if (this.pedido.cliente.endereco[index].idEndereco == this.pedido.endereco) {
        this.enderecoFormatado = this.pedido.cliente.endereco[index];
        index2++;
        console.log("endereco: ", this.enderecoFormatado);
      } 
    }

  }

  buscarPedidoUnico(idPedido){
    this.variables.postIdPedido(idPedido);
    console.log(idPedido);
  }

  voltar(): void {
    this.router.navigate(['/pedido/finalizados']);
  }

}
