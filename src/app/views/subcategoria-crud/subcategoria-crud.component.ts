import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategoria-crud',
  templateUrl: './subcategoria-crud.component.html',
  styleUrls: ['./subcategoria-crud.component.css']
})
export class SubcategoriaCrudComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Sub-Categoria',
      icon: 'storefront',
      routeUrl: '/subCategoria'
    }
  }

  ngOnInit(): void {
  }

  navigateToSubCategoriaCreate(): void {
    this.router.navigate(['subCategoria/create'])
    console.log('Navegando...')
  }

}
