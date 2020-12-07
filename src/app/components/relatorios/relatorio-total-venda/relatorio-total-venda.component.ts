import { Pedido } from './../../pedidos/pedidos.model';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../pedidos/pedidos.service';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-relatorio-total-venda',
  templateUrl: './relatorio-total-venda.component.html',
  styleUrls: ['./relatorio-total-venda.component.css']
})
export class RelatorioTotalVendaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  // nao mexer
  pedidos: any = []
  pedidosFormatado: any = [];
  constructor(private pedidoService: PedidosService,
    private headerService: HeaderService) {

    headerService.headerData = {
      title: 'Relatórios - Total de Vendas ',
      icon: 'list_alt',
      routeUrl: '/relatorio-venda-total'
    }
     // Create 100 users
     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    this.bancoPedidos();
  }
  bancoPedidos() {

    this.pedidoService.read().subscribe(pedidos => {
      let index2 = 0;
      this.pedidos = pedidos

      for (let index = 0; index < this.pedidos.length; index++) {
        if (this.pedidos[index].statusPedido.idStatusPedido == 4 || this.pedidos[index].statusPedido.idStatusPedido == 5) {
          this.pedidosFormatado[index2] = this.pedidos[index];
          index2++;
        }

      }
      /* console.log("funcionou " + this.pedidosFormatado); */
    })
  }
  // !nao mexer
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
