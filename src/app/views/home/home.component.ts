import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VariablesService } from './../../components/variables.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApimercadoService } from './../../components/apimercado.service';
import { PedidosService } from './../../components/pedidos/pedidos.service';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
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
      <button type="button" class="btn btn-primary" (click)=" modalTeste()">Ok</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  modalTeste(){
    console.log("FUNCIONOU!")
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  pedidos: any = []
  pedidosFormatado:any=[];

  result: any;

  displayedColumns = ['id', 'cliente', 'data', 'formaPagamento', 'situacao', 'action']

  constructor(private headerService: HeaderService,
              private pedidoService: PedidosService,
              private apimercado: ApimercadoService,
              private spinner: NgxSpinnerService,
              private router: Router,
              private modalService: NgbModal, 
              private variables: VariablesService) {
    
    headerService.headerData = {
      title: 'Inicio',
      icon:'home',
      routeUrl:''
    }
   }

  ngOnInit(): void {

    this.bancoPedidos();
    this.doRefresh();
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

  modalTeste(){
    console.log("FUNCIONOU!")
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

}
