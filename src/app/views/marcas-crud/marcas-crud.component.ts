import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas-crud',
  templateUrl: './marcas-crud.component.html',
  styleUrls: ['./marcas-crud.component.css']
})
export class MarcasCrudComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Marcas',
      icon: 'storefront',
      routeUrl: '/marcas'
    }
  }
  ngOnInit(): void {
  }

  navigateToMarcaCreate(): void {
    this.router.navigate(['marca/create'])
    console.log('Navegando...')
  }

}
