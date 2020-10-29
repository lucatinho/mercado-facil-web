import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercado-info',
  templateUrl: './mercado-info.component.html',
  styleUrls: ['./mercado-info.component.css']
})
export class MercadoInfoComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Mercado Info',
      icon: 'storefront',
      routeUrl: '/mercadoInfo'
    }
  }

  ngOnInit(): void {
  }


  
}
