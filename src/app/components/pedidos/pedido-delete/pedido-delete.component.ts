import { NgxSpinnerService } from 'ngx-spinner';

import { VariablesService } from './../../variables.service';
import { ApimercadoService } from './../../apimercado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidosService } from './../pedidos.service';
import { Pedido } from './../pedidos.model';
import { Component, OnInit, Input} from '@angular/core';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

/* @Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      <button type="button" class="btn btn-primary" (click)="testeFora()">Ok</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal,
              ) {}

  modalTeste(){
    console.log("FUNCIONOU!")
    this.activeModal.close('Close click')
  }

  testeFora(){
    console.log("FUNCIONOU! Teste !")
    this.activeModal.close('Close click')
  }

} */

@Component({
  selector: 'app-pedido-delete',
  templateUrl: './pedido-delete.component.html',
  styleUrls: ['./pedido-delete.component.css']
})

export class PedidoDeleteComponent implements OnInit {

  panelOpenState = false;

  displayedColumns = ['id', 'nomeProduto', 'marcaProduto', 'valorUni', 'qtdProduto']

  pedido: any = [];
  result: any;

  enderecoFormatado: any = []

  idPedido: any;

  closeResult = '';

  constructor(
    private pedidoService: PedidosService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private apimercado: ApimercadoService,
    private modalService: NgbModal,
    private variables: VariablesService
  ) { }


  ngOnInit(): void {
    this.banco();
  }

/*   open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  } */

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.spinner.show();
      console.log("SAIU POR AQUI")
      this.recusarPedido();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  bancoEndereco(){

    let index2 = 0;
    
    for (let index = 0; index < this.pedido.cliente.endereco.length; index++) {
      if (this.pedido.cliente.endereco[index].principal == this.pedido.endereco) {
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
          }
        };

        this.bancoEndereco();

      })
      .catch((response) => {
        this.pedido = response;
      });
  }

  recusarPedido() {


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
    console.log(pedidos)

    pedidos.statusPedido.idStatusPedido = 5

    console.log("Aqui depois de mudar", pedidos)

    this.apimercado.putPedido(pedidos).then((response: any) => {
      console.log("funcionou pedido = ", response);
      this.result = response;
      this.spinner.hide();
      this.apimercado.showMessage("Operação Realizada com Sucesso!")
      this.router.navigate(['pedido/finalizados']);

    })
      .catch((response) => {
        this.spinner.hide();
        console.log("deu erro pedido = ", response);
        this.result = response;
        this.apimercado.showMessage("Ocorreu algum erro!")
      });
  }



  cancel(): void {
    this.router.navigate(['/pedidos']);
  }

}
