import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  private idPedido: any;
  private sessao: any ={};

  constructor(private localStorage: LocalStorageService) { }

  getSessao() {
    return this.sessao;
  }

  postSessao(username, password, infoMercado) {
    this.sessao = {username, password, infoMercado}
    console.log("logo sessão: ", this.sessao)

    this.localStorage.store("loginSessao", this.sessao)
  }

  getIdPedido() {
    return this.idPedido;
  }

  postIdPedido(idPedido) {
    this.idPedido = idPedido
  }
}
