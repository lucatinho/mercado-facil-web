import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-crud',
  templateUrl: './categoria-crud.component.html',
  styleUrls: ['./categoria-crud.component.css']
})
export class CategoriaCrudComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Categoria',
      icon: 'storefront',
      routeUrl: '/categoria'
    }
  }

  ngOnInit(): void {
  }

  navigateToCategoriaCreate(): void {
    this.router.navigate(['categoria/create'])
    console.log('Navegando...')
  }

}
