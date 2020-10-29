import { ApimercadoService } from './../../apimercado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidosService } from './../pedidos.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedidos.model';
import { VariablesService } from '../../variables.service';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
  styleUrls: ['./pedido-update.component.css']
})
export class PedidoUpdateComponent implements OnInit {

  panelOpenState = false;

  displayedColumns = ['id', 'nomeProduto', 'marcaProduto', 'valorUni', 'qtdProduto']

  pedido: any = [];
  enderecoFormatado: any = []
  result: any;

  idPedido: any;
  totalpedido: number = 0;

  constructor(
    private pedidoService: PedidosService,
    private router: Router,
    private route: ActivatedRoute,
    private apimercado: ApimercadoService,
    private variables: VariablesService
  ) { }

  ngOnInit() {
    this.banco();

    // const id = +this.route.snapshot.paramMap.get('id')
    // this.pedidoService.readById(id).subscribe(pedido => {
    //   this.pedido = pedido;
    //   console.log(this.pedido)
    // });
  }

  getTotalPedido() {
    for (let index = 0; index < this.pedido.pedidoProdutos.length; index++) {
      console.log("valor uni :", this.pedido.pedidoProdutos[index].valorUni, "qtd :", this.pedido.pedidoProdutos[index].qtdProduto)
      this.totalpedido = this.totalpedido + (this.pedido.pedidoProdutos[index].valorUni * this.pedido.pedidoProdutos[index].qtdProduto)
    };
  }

  bancoEndereco() {

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

  updatePedido() {


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

    pedidos.statusPedido.idStatusPedido = 2

    console.log("Aqui depois de mudar", pedidos)

    this.apimercado.putPedido(pedidos).then((response: any) => {
      console.log("funcionou pedido = ", response);
      this.result = response;
      this.apimercado.showMessage('Operação realizada com Sucesso !');
      this.router.navigate(['/pedidos']);

    })
      .catch((response) => {
        console.log("deu erro pedido = ", response);
        this.result = response;
      });
  }

  buscarPedidoUnico(idPedido) {
    this.variables.postIdPedido(idPedido);
    console.log(idPedido);
  }

  voltar(): void {
    this.router.navigate(['/pedidos']);
  }





  /*  pedido: {
    idPedido: "",
    cliente: {
        idPedido: "",
        nomeLogin: "",
        nome: "",
        observacao: "",
        situacao: "",
        permiteLogin: "",
        dataNascimento: "",
        cpf: "",
        endereco: "",
        cep: "",
        celular: "",
        mercadoFavorito: ""
    },
    mercados: {
        idMercado: 1,
    },
    formaPagamento: "",
    formaEnvio: "",
    dataPedido: "",
    statusPedido: {
        idStatusPedido: "",
        nomeStatusPedido: ""
    },
    pedidoProdutos: [
        {
            idPedidoProduto: "",
            nomeProduto: "",
            marcaProduto: "",
            valorUni: "",
            qtdProduto: "",
            produto: ""
        }
    ]
  
  
  }
  */
}
