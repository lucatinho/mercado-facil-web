import { map, catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Marcas } from './marcas.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  // variavel username
  private username = new BehaviorSubject<string>("0");
  currentUsername = this.username.asObservable();
  // variavel password
  private password = new BehaviorSubject<string>("0");
  currentPassword = this.password.asObservable();

  CadastroUrl = "https://apimercado-central.herokuapp.com/api/marca/"
  
  UpadateUrl = "https://apimercado-central.herokuapp.com/api/marca"
  
  baseUrl = "https://apimercado-central.herokuapp.com/api/marcas/"

  constructor(private snackBar: MatSnackBar,
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

    create(marca: any)  {
      let username = 'mercadoadm'
      let password = '123'
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
      return this.http.post(this.CadastroUrl, marca, { headers }).toPromise();
    }

    read(): Observable<Marcas[]> {
      let username = 'mercadoadm'
      let password = '123'
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get<Marcas[]>(this.baseUrl , { headers })
    }
  
    readById(idMarca: number): Observable<Marcas> {
      let username = 'mercadoadm'
      let password = '123'
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      const url = `${this.UpadateUrl}/${idMarca}`
      return this.http.get<Marcas>(url, { headers })
    }

    update(marca: any) {
      let username = 'mercadoadm'
      let password = '123'
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      const url = `${this.UpadateUrl}`
      return this.http.put<Marcas>(url, marca, { headers })
    }
}
