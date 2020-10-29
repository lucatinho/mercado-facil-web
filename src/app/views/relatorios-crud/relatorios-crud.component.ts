import { Router } from '@angular/router';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios-crud',
  templateUrl: './relatorios-crud.component.html',
  styleUrls: ['./relatorios-crud.component.css']
})
export class RelatoriosCrudComponent implements OnInit {

  constructor( private router: Router,
    private headerService: HeaderService) {
    
    headerService.headerData = {
    title: 'Relatórios ',
    icon: 'list_alt',
    routeUrl: '/relatorios'
  }
 }

  

  ngOnInit(): void {
  }

}
