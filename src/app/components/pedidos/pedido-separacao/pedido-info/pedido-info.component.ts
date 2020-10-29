import { Pedido } from './../../pedidos.model';
import { VariablesService } from './../../../variables.service';
import { ApimercadoService } from './../../../apimercado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidosService } from './../../pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-info',
  templateUrl: './pedido-info.component.html',
  styleUrls: ['./pedido-info.component.css']
})
export class PedidoInfoComponent implements OnInit {

  panelOpenState = false;

  displayedColumns = ['id', 'nomeProduto', 'marcaProduto', 'valorUni', 'qtdProduto']

  pedido: any = [];
  result: any;

  enderecoFormatado: any = []

  cliente: any = [];

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

  separador(){

    console.log("Separador");

    if (this.pedido.formaEnvio == "Retirada no mercardo") {
      console.log("Retirada");
      this.updateRetirada();
      
    } else {
      console.log("Entrega");
      this.updatePedido();

    }
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

  banco() {

    this.apimercado.getPedidos()
      .then((response) => {
        this.idPedido = this.variables.getIdPedido();
        this.pedido = response;
        console.log("fora: ", response);

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

  updateRetirada() {
    console.log("Entrou no retirada")

    let pedidos: Pedido = {
      idPedido: this.pedido.idPedido,
      endereco: this.pedido.endereco,
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
    console.log(pedidos)

    pedidos.statusPedido.idStatusPedido = 6

    console.log("Aqui depois de mudar", pedidos)

    this.apimercado.putPedido(pedidos).then((response: any) => {
      console.log("funcionou pedido = ", response);
      this.result = response;
      this.apimercado.showMessage("Operação Realizada com Sucesso")

      this.router.navigate(['pedido/enviado']);

    })
      .catch((response) => {
        console.log("deu erro pedido = ", response);
        this.apimercado.showMessage("Ocorreu um Erro!")
        this.result = response;
      });
  }

  updatePedido() {
    console.log("Entrou no update")

    let pedidos: Pedido = {
      idPedido: this.pedido.idPedido,
      endereco: this.pedido.endereco,
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
    console.log(pedidos)

    pedidos.statusPedido.idStatusPedido = 3

    console.log("Aqui depois de mudar", pedidos)

    this.apimercado.putPedido(pedidos).then((response: any) => {
      console.log("funcionou pedido = ", response);
      this.result = response;
      this.apimercado.showMessage("Operação Realizada com Sucesso")

      this.router.navigate(['pedido/enviado']);

    })
      .catch((response) => {
        console.log("deu erro pedido = ", response);
        this.apimercado.showMessage("Ocorreu um Erro!")
        this.result = response;
      });
  }

  cancel(): void {
    this.router.navigate(['pedido/separacao']);
  }

}
