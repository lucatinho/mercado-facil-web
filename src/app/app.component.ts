import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VariablesService } from './components/variables.service';
import { ApimercadoService } from './components/apimercado.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  test:boolean=false;

  username: string;
  password: string;
  message: any
  login:any;

  constructor(private variables: VariablesService,
              private Router: Router,
              private service: ApimercadoService,
              private localStorage: LocalStorageService,
              private spinner: NgxSpinnerService
              ){}

  ngOnInit() {

    this.logado();

  }

  logado(){
    this.Router.navigate(['/']);
    
    console.log("entrou no login")

    let loginSalvo = this.localStorage.retrieve('loginSessao');

    console.log("login salvo", loginSalvo)

    if ( loginSalvo != null) {

      this.variables.postSessao(loginSalvo.username, loginSalvo.password, loginSalvo.infoMercado)
      console.log("login salvo dentro", loginSalvo)
      this.test = true
      this.Router.navigate(['/']);

      } else {
        this.Router.navigate(['/']);
        this.spinner.hide();
        this.test = false
        /* alert("Você não está logado"); */
      }
      
    
  }

  doLogin() {

    
    let loginSalvo = {
      username: this.username,
      password: this.password
    }  

    this.localStorage.store("login", loginSalvo)

    // chama a tela de carregamento
    this.spinner.show();


    this.service.sessao(loginSalvo.username, loginSalvo.password)
      .then((response) => {
        
        this.login = response;

        if (this.login.mercados != null) {
          this.variables.postSessao(loginSalvo.username, loginSalvo.password, this.login.mercados)
          console.log("logou: ", this.login);
          this.test = true
          this.Router.navigate(['/']);
          this.spinner.hide();
        } else {
          this.spinner.hide();
          alert("Clientes devem acessar o aplicativo Mercado facil na play store !");
        }
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.spinner.hide();
        this.login = response;
        console.log("erro: ", response);
        alert("Usuario ou senha incorretos !");
        // fecha a tela de carregamento
      });
  }

  setLogin(){
    
    let loginSalvo = {
      username: this.username,
      password: this.password
    }  

    this.localStorage.store("login", loginSalvo)

    console.log ("login", loginSalvo);

    /*
    this.localSt.store("login", this.login).then(() => {
      console.log ("login salvo"); 
    })

    this.localSt.store('teste', 'top1'); */

  } 

  clearLogin(){
    this.localStorage.clear();
  }

}
