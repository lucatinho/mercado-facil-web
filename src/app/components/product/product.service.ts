import { VariablesService } from './../variables.service';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // variavel username
  private username = new BehaviorSubject<string>("0");
  currentUsername = this.username.asObservable();
  // variavel password
  private password = new BehaviorSubject<string>("0");
  currentPassword = this.password.asObservable();

  baseUrl = "https://apimercado-central.herokuapp.com/api/mercado1"

  

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

  create(product: Product): Observable<Product> {
    let username = 'mercadoadm'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<Product>(this.baseUrl, product, { headers }).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    )
  }

  handleError(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }

  read(): Observable<Product[]> {
    let username = 'servo'
    let password = '123'

    let url = "https://apimercado-central.herokuapp.com/api/mercado" + this.variables.getSessao().infoMercado.idMercado

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Product[]>(url, { headers })
  }

  readById(idProduto: number): Observable<Product> {
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    let url = "https://apimercado-central.herokuapp.com/api/mercado" + this.variables.getSessao().infoMercado.idMercado

    const prodUrl = `${url}/${idProduto}`
    return this.http.get<Product>(prodUrl, { headers })
  }

  update(product: Product): Observable<Product> {
    let username = 'mercadoadm'
    let password = '123'

    

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    /* const url = `${this.baseUrl}` */

    let url = "https://apimercado-central.herokuapp.com/api/mercado/" + this.variables.getSessao().infoMercado.idMercado

    return this.http.put<Product>(url, product, { headers })
  }

  delete(idProduto: number): Observable<Product> {
    const url = `${this.baseUrl}/${idProduto}`
    return this.http.delete<Product>(url)
  }

} 
