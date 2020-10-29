import { Router } from '@angular/router';
import { MarcaService } from './../marca.service';
import { Marcas } from './../marcas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca-read',
  templateUrl: './marca-read.component.html',
  styleUrls: ['./marca-read.component.css']
})
export class MarcaReadComponent implements OnInit {

  marcas: Marcas[]
  displayedColumns = ['id','nomeMarca','action']

  constructor(private marcaService: MarcaService,
              private router : Router) { }

  ngOnInit(): void {

    this.marcaService.read().subscribe(marcas =>{
      this.marcas = marcas
      this.marcas.sort((a, b) => a.nomeMarca.localeCompare(b.nomeMarca));
      console.log(marcas)
    })
  }


  update(id) {
    console.log('test: ', "/marca/update/" + id)
    this.router.navigate(['/marca/update/' + id])
    console.log('Navegando...')
  }

  delete(id) {
    console.log('test: ', "/marca/update/" + id)
    this.router.navigate(['/marca/update/' + id])
    console.log('Navegando...')
  }

}
