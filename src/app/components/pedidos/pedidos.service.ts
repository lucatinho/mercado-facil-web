import { VariablesService } from './../variables.service';
import { Pedido } from './pedidos.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { map, catchError, sampleTime } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  // variavel username
  private username = new BehaviorSubject<string>("0");
  currentUsername = this.username.asObservable();
  // variavel password
  private password = new BehaviorSubject<string>("0");
  currentPassword = this.password.asObservable();

  

  constructor(private snackBar: MatSnackBar,
              private variables: VariablesService,
              private http: HttpClient) { }

  showMessage(msg: string,
    isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    })

  }

  read(): Observable<Pedido[]> {
    let username = 'mercadoadm'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    
    
    let url = "https://apimercado-central.herokuapp.com/api/pedido/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const subUrl = `${url}/${mercado}`


    return this.http.get<Pedido[]>(subUrl , { headers })
  }

  readById(idPedido: number): Observable<Pedido> {
    let username = 'mercadoadm'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    /* const url = `${this.baseUrl}` */
    let url = "https://apimercado-central.herokuapp.com/api/mercado/" + this.variables.getSessao().infoMercado.idMercado

    return this.http.get<Pedido>(url, { headers })
  }
}
