import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id','nome','preco','action']

  constructor(private productService: ProductService,
              private router : Router) { }

  ngOnInit(): void {

    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products)
    })
  }

  update(id) {
    console.log('test: ', "/products/update/" + id)
    this.router.navigate(['/products/update/' + id])
    console.log('Navegando...')
  }

  delete(id) {
    console.log('test: ', "/products/update/" + id)
    this.router.navigate(['/products/update/' + id])
    console.log('Navegando...')
  }

}
