import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VariablesService } from './variables.service';

@Injectable({
  providedIn: 'root'
})
export class ApimercadoService {

  baseUrl = "https://apimercado-central.herokuapp.com/api/mercado/"

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private variables: VariablesService) { }


  showMessage(msg: string,
    isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    })

  }
  // mercado
  getMercado() {
    let username = this.variables.getSessao().username;
    let password = this.variables.getSessao().password;

    //const url = `${this.baseUrl}/${idMercado}`

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // return this.http.get("http://localhost:8080/api/mercados", { headers }).toPromise();
    // link rede
    let url = "https://apimercado-central.herokuapp.com/api/mercado/" + this.variables.getSessao().infoMercado.idMercado
    return this.http.get(url, { headers }).toPromise();
    //return this.http.get("https://apimercado-central.herokuapp.com/api/mercado/1", { headers }).toPromise();
    // precisa colocar o id correspondente a cada mercado via login
  }

  putMercado(pedido: any) {
    let username = this.variables.getSessao().username;
    let password = this.variables.getSessao().password;
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local

/*     let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const merUrl = `${url}${mercado}` */

    // link rede
    //let url = "https://apimercado-central.herokuapp.com/api/mercado/" + this.variables.getSessao().infoMercado.idMercado
    let url = "https://apimercado-central.herokuapp.com/api/mercado"

    return this.http.post(url, pedido, { headers }).toPromise();
  }
  // !mercado

  //  produto
  getProduto() {
    let username = this.variables.getSessao().username;
    let password = this.variables.getSessao().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // return this.http.get("http://localhost:8080/api/mercados", { headers }).toPromise();
    // link rede


    let url = "https://apimercado-central.herokuapp.com/api/mercado/" + this.variables.getSessao().infoMercado.idMercado

    return this.http.get(url, { headers }).toPromise();
    // precisa colocar o id correspondente a cada mercado via login
  }

  postProduto(pedido: any) {
    let username = 'servo'
    let password = '123'
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local
    //let url = "https://apimercado-central.herokuapp.com/api/mercado/" + this.variables.getSessao().infoMercado.idMercado

    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const pedUrl = `${url}${mercado}`


    return this.http.post(pedUrl, pedido, { headers }).toPromise();
    // link rede
    // return this.http.post('https://apimercado-central.herokuapp.com/api/mercado1', pedido, { headers }).toPromise();
  }

  putProduto(pedido: any) {
    let username = 'servo'
    let password = '123'
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    
    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const pedUrl = `${url}${mercado}`
    
    // link local
    return this.http.post(pedUrl, pedido, { headers }).toPromise();
    // link rede
    // return this.http.put('https://apimercado-central.herokuapp.com/api/mercado1', pedido, { headers }).toPromise();
  }

  deleteProduto(pedido: any) {
    let username = 'servo'
    let password = '123'
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local
    // return this.http.delete('http://localhost:8080/api/mercado1', pedido).toPromise();
    // link rede

    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const pedUrl = `${url}${mercado}`

    return this.http.delete(pedUrl, pedido).toPromise();
  }
  // !produto

  // Marcas
  getMarca() {
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // return this.http.get("http://localhost:8080/api/mercados", { headers }).toPromise();
    // link rede
    return this.http.get("https://apimercado-central.herokuapp.com/api/marcas", { headers }).toPromise();
    // precisa colocar o id correspondente a cada mercado via login
  }

  postMarca(pedido: any) {
    let username = this.variables.getSessao().username;
    let password = this.variables.getSessao().password;
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local
    return this.http.post('https://apimercado-central.herokuapp.com/api/marca', pedido, { headers }).toPromise();
    // link rede
    // return this.http.post('https://apimercado-central.herokuapp.com/api/mercado1', pedido, { headers }).toPromise();
  }

  putMarca(pedido: any) {
    let username = this.variables.getSessao().username;
    let password = this.variables.getSessao().password;
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local
    return this.http.post('https://apimercado-central.herokuapp.com/api/marca', pedido, { headers }).toPromise();
    // link rede
    // return this.http.put('https://apimercado-central.herokuapp.com/api/mercado1', pedido, { headers }).toPromise();
  }
  // !Marcas

  // categoria
  getCategoria() {
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const catUrl = `${url}${mercado}/categorias`

    console.log(catUrl)

    // link local
    // return this.http.get("http://localhost:8080/api/mercados", { headers }).toPromise();
    // link rede
    return this.http.get(catUrl, { headers }).toPromise();
    //return this.http.get("https://apimercado-central.herokuapp.com/api/mercado1/categorias", { headers }).toPromise();
    // precisa colocar o id correspondente a cada mercado via login
  }


  postCategoria(pedido: any) {
    let username = this.variables.getSessao().username;
    let password = this.variables.getSessao().password;
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local

    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const catUrl = `${url}${mercado}/categoria`

    return this.http.post(catUrl, pedido, { headers }).toPromise();
    //return this.http.post('https://apimercado-central.herokuapp.com/api/mercado1/categoria', pedido, { headers }).toPromise();
    // link rede
    // return this.http.post('https://apimercado-central.herokuapp.com/api/mercado1', pedido, { headers }).toPromise();
  }

  putCategoria(pedido: any) {
    let username = this.variables.getSessao().username;
    let password = this.variables.getSessao().password;
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local

    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const catUrl = `${url}${mercado}/categoria`

    return this.http.post(catUrl, pedido, { headers }).toPromise();
    //return this.http.post('https://apimercado-central.herokuapp.com/api/mercado1/categoria', pedido, { headers }).toPromise();
    // link rede
    // return this.http.put('https://apimercado-central.herokuapp.com/api/mercado1', pedido, { headers }).toPromise();
  }
  // !categoria

  // subcategoria
  getSubcategoria() {
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // return this.http.get("http://localhost:8080/api/mercados", { headers }).toPromise();
    // link rede

    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const subUrl = `${url}${mercado}/subcategorias`

    return this.http.get(subUrl, { headers }).toPromise();
    //return this.http.get("https://apimercado-central.herokuapp.com/api/mercado1/subcategorias", { headers }).toPromise();
    // precisa colocar o id correspondente a cada mercado via login
  }

  postSubcategoria(pedido: any) {
    let username = 'servo'
    let password = '123'
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local

    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const subUrl = `${url}${mercado}/subcategoria`

    return this.http.post(subUrl, pedido, { headers }).toPromise();
    //return this.http.post('https://apimercado-central.herokuapp.com/api/mercado1/subcategoria', pedido, { headers }).toPromise();
    // link rede
    // return this.http.post('https://apimercado-central.herokuapp.com/api/mercado1', pedido, { headers }).toPromise();
  }

  putSubcategoria(pedido: any) {
    let username = 'servo'
    let password = '123'
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local

    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const subUrl = `${url}${mercado}/subcategoria`

    return this.http.post(subUrl, pedido, { headers }).toPromise();
    //return this.http.post('https://apimercado-central.herokuapp.com/api/mercado1/subcategoria', pedido, { headers }).toPromise();
    // link rede
    // return this.http.put('https://apimercado-central.herokuapp.com/api/mercado1', pedido, { headers }).toPromise();
  }
  // !subcategoria

  // pedidos
  getPedidos() {
    // let username = 'mercadoadm'
    // let password = '123'
    let username = this.variables.getSessao().username;
    let password = this.variables.getSessao().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    let url = "https://apimercado-central.herokuapp.com/api/pedido/mercado/ "
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const pedUrl = `${url}${mercado}`

    // link local
    // return this.http.get("http://localhost:8080/api/mercados", { headers }).toPromise();
    // link rede
    return this.http.get(pedUrl, { headers }).toPromise();
    //return this.http.get("https://apimercado-central.herokuapp.com/api/pedido/mercado/1", { headers }).toPromise();
  }

  putPedido(pedido: any) {
    let username = 'usuario'
    let password = '123'
    // let username = this.saveUser.getLogin().username;
    // let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local

    return this.http.post('https://apimercado-central.herokuapp.com/api/pedido', pedido, { headers }).toPromise();
    //return this.http.post('https://apimercado-central.herokuapp.com/api/pedido', pedido, { headers }).toPromise();
    // link rede
    // return this.http.put('https://apimercado-central.herokuapp.com/api/mercado1', pedido, { headers }).toPromise();
  }
  // !pedidos

  // test login
  sessao(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    let url = "https://apimercado-central.herokuapp.com/api/usuario/" + username;
    return this.http.get(url, { headers }).toPromise();
  }
  // !test login
}
