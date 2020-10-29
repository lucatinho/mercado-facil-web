import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-produtos-crud',
  templateUrl: './produtos-crud.component.html',
  styleUrls: ['./produtos-crud.component.css']
})
export class ProdutosCrudComponent implements OnInit {

  constructor(private router : Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Produtos',
      icon:'storefront',
      routeUrl:'/produtos'
    }
   }
  
  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
    console.log('Navegando...')
  }

}
