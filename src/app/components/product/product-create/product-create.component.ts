import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarcaService } from './../../marcas/marca.service';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApimercadoService } from '../../apimercado.service';
import { Marcas } from '../../marcas/marcas.model';
import { Location } from '@angular/common';
import { VariablesService } from '../../variables.service';
import { ImageService } from '../../image.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  result: any;

  marca: Marcas[];
  categorias: any = [];
  subcategoria: any = [];

  // img
  imageTitle: string;
  imageDescription: string;
  imageFile: File;
  //  !img

  product: Product = {
    idMercado: this.variables.getSessao().infoMercado.idMercado,
    nomeProduto: '',
    descricao: '',
    quantidade: null,
    preco: null,
    imgProduto: "http://placehold.it/64x64",
    marca: {
      idMarca: 1
    },
    categoria: {
      idCategoria: 1
    },
    subCategoria: {
      idSubCategoria: 1
    },
    ativo: true
  }

  constructor(
    private ProductService: ProductService,
    private Router: Router,
    private marcaService: MarcaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private spinner: NgxSpinnerService,
    private apimercado: ApimercadoService,
    private variables: VariablesService,
    private imageService: ImageService
    ) { }


  showMessage(msg: string,
    ): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: ['msg-success']
    })

  }

  ngOnInit(): void {
    this.readMarca();
    this.readCategoria();
  }

  //validação

  OnSubmit(form) {

    
    console.log("Status do formulario", form.status);

    if (form.status == "VALID") {
      this.addImage();  

    } else {
      this.showMessage('Verifique o formulário !')
    }
    console.log("Valores do formulario", this.product);
  }


  load() {
    location.reload()
  }

  imageInputChange(imageInput: any) {
    this.imageFile = imageInput.files[0];
  }
  addImage() {

   
    this.imageTitle = "Produto " + this.variables.getSessao().infoMercado.nomeMercado;
    this.imageDescription = "Produto";

    let infoObject = {
      title: this.imageTitle,
      description: this.imageDescription
    };

    console.log("img: ", this.imageFile);

    
    this.spinner.show();
    this.imageService.uploadImage(this.imageFile, infoObject).then((response: any) => {
      console.log("funcionou add img= ", response);
      this.result = response;
      this.product.imgProduto = this.result.data.link;

      
      this.createProduct();
      
    })
      .catch((response) => {
        console.log("Erro add img = ", response);
        this.result = response;
        this.spinner.hide();
        alert("Erro ao carregar imagem, tente novamente mais tarde !")
      });
  }
  createProduct() {
    let product1: any = {
      idMercado: this.product.idMercado,
      nomeProduto: this.product.nomeProduto,
      descricao: this.product.descricao,
      quantidade: this.product.quantidade,
      preco: this.product.preco,
      imgProduto: this.product.imgProduto,
      ativo: true,
      marca:{
        idMarca: this.product.marca.idMarca
      },
      categoria: {
        idCategoria: this.product.categoria.idCategoria
      },
      subCategoria:{
        idSubCategoria: this.product.subCategoria.idSubCategoria
      }
    }
    console.log("envia: ", product1);

    // console.log("envia: ", this.product);
    
    this.apimercado.postProduto(product1).then((response: any) => {
      this.spinner.hide();
      
      console.log("funcionou pedido = ", response);
      this.result = response;

      
      this.apimercado.showMessage('Operação Realizada com Sucesso !');


      console.log("Aqui da reload na pagina")
      this.product = {
        idMercado: this.variables.getSessao().infoMercado.idMercado,
        nomeProduto: '',
        descricao: '',
        quantidade: null,
        preco: null,
        imgProduto: "http://placehold.it/64x64",
        marca: {
          idMarca: 1
        },
        categoria: {
          idCategoria: 1
        },
        subCategoria: {
          idSubCategoria: 1
        },
        ativo: true
      }

      // this.load();


    })
      .catch((response) => {
        this.spinner.hide();
        console.log("deu erro pedido = ", response);
        this.result = response;
        this.apimercado.showMessage('Ocorreu um erro !');
      });
  }
  // pega valores selecionados no front 
  matselectMarca(valor: any) {
    this.product.marca.idMarca = valor;
  };
  async matselectCategoria(valor: any) {
    this.product.categoria.idCategoria = valor.idCategoria;
    this.subcategoria = valor.subCategoria;
    console.log(this.subcategoria);
  };
  matselectSubcategoria(valor: any) {
    this.product.subCategoria.idSubCategoria = valor;
  };

  // banco de categorias
  readCategoria() {
    // chama a tela de carregamento
    this.apimercado.getCategoria()
      .then((response) => {
        this.categorias = response;
        // this.categorias.sort((a, b) => a.nomeCategoria.localeCompare(b.nomeCategoria));
        console.log("banco categoria:", this.categorias);
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.categorias = response;
        // fecha a tela de carregamento
      });
  }

  // banco de marcas
  readMarca() {
    //Puxando a lista de marcas do select
    this.marcaService.read().subscribe(marca => {
      this.marca = marca;
      this.marca.sort((a, b) => a.nomeMarca.localeCompare(b.nomeMarca));
      console.log(marca)
    })
  }

  cancel(): void {
    this.Router.navigate(['/produtos'])
  }

}
