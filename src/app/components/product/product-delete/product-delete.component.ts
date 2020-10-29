import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../../apimercado.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  result: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private apimercado: ApimercadoService
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct() {
    let product1: any = {
      idProduto: 13
    }

    this.apimercado.deleteProduto(product1).then((response: any) => {
      console.log("funcionou delete = ", response);
      this.result = response;

    })
      .catch((response) => {
        console.log("deu erro delete = ", response);
        this.result = response;
      });
  }

  // deleteProduct(): void {
  //   this.productService.delete(this.product.idProduto).subscribe(() => {
  //     this.productService.showMessage('Produto excluido com sucesso!')
  //     this.router.navigate(['/produtos'])
  //   })
  // }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }

}
