import { Categoria } from './../../categorias/categoria.model';
import { SubCategoria } from './../../subcategorias/subcategoria.model';
import { ImageService } from './../../image.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VariablesService } from './../../variables.service';
import { MarcaService } from './../../marcas/marca.service';
import { Marcas } from './../../marcas/marcas.model';
import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../../apimercado.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  isChecked = true;

  product: Product = {
    idMercado: this.variables.getSessao().infoMercado.idMercado,
    nomeProduto: '',
    descricao: '',
    quantidade: 1,
    preco: null,
    imgProduto: '',
    marca: {
      idMarca: null
    },
    categoria: {
      idCategoria: null
    },
    subCategoria: {
      idSubCategoria: null
    },
    ativo: null
  }
  
  result: any;

  marca: Marcas[];
  categorias:any = [];
  subcategoria:any = [];

  
  // img
  imageTitle: string;
  imageDescription: string;
  imageFile: File = null;
  //  !img

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    private variables: VariablesService,
    private apimercado: ApimercadoService,
    private imageService: ImageService,
    private MarcaService : MarcaService
  ) { }


  showMessage(msg: string
    ): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: ['msg-success'],
    })

  }

  /** Preenche o formulario */

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.ProductService.readById(id).subscribe(product => {
      this.product = product;
      console.log(this.product)
    });

    this.readCategoria();
    this.readMarca();
    this.readSubcategoria();
  }

    //validação

    OnSubmit(form) {

    
      console.log("Status do formulario", form.status);

      this.addImage();  
/*   
      if (form.status == "VALID") {
        this.addImage();  
  
      } else {
        this.showMessage('Verifique o formulário !')
      }
      console.log("Valores do formulario", this.product); */
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

      if (this.imageFile != null) {
      
      this.imageService.uploadImage(this.imageFile, infoObject).then((response: any) => {
        console.log("funcionou add img= ", response);
        this.result = response;
        this.product.imgProduto = this.result.data.link;
        this.updateProduct();
      })
        .catch((response) => {
          console.log("Erro add img = ", response);
          this.result = response;
          this.spinner.hide();
          alert("Erro ao carregar imagem, tente novamente mais tarde !")
        });
      }else{
        this.updateProduct();
      }
    }

  // pega valores selecionados no front 
  matselectMarca(valor: any){
    this.product.marca.idMarca = valor;
  };
  matselectCategoria(valor: any){
    this.product.categoria.idCategoria = valor;
  };
  matselectSubcategoria(valor: any){
    this.product.subCategoria.idSubCategoria = valor;
  };

  matselectAtivo(valor: any){
    this.product.ativo = valor;
  };
  
  /* matradiobutton(valor: any){
    this.product.ativo = valor;
  }; */

  // banco de categorias
  readCategoria(){
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
// banco de subcategorias
  readSubcategoria(){
    this.apimercado.getSubcategoria()
      .then((response) => {
        this.subcategoria = response;
        this.subcategoria.sort((a, b) => a.nomeSubCategoria.localeCompare(b.nomeSubCategoria));
        console.log("banco subcategora:", this.subcategoria);
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.subcategoria = response;
        console.log("erro banco subcategora:", this.subcategoria);
        // fecha a tela de carregamento
      });
  }

// banco de marcas
  readMarca(){
    //Puxando a lista de marcas do select
    this.MarcaService.read().subscribe(marca =>{
      this.marca = marca;
      this.marca.sort((a, b) => a.nomeMarca.localeCompare(b.nomeMarca));
      console.log("Banco Marca",marca)
    })
  }
  updateProduct(){

    let product1: any;

    if(this.imageFile != null){
      product1 = {
        idMercado: this.product.idMercado,
        idProduto: this.product.idProduto,
        nomeProduto: this.product.nomeProduto,
        descricao: this.product.descricao,
        quantidade: this.product.quantidade,
        preco: this.product.preco,
        imgProduto: this.result.data.link,
        ativo: this.product.ativo,
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
      
    } else {
      product1 = {
        idMercado: this.product.idMercado,
        idProduto: this.product.idProduto,
        nomeProduto: this.product.nomeProduto,
        descricao: this.product.descricao,
        quantidade: this.product.quantidade,
        preco: this.product.preco,
        imgProduto: this.product.imgProduto,
        ativo: this.product.ativo,
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
    }

    console.log("PEGOU",product1)

    this.apimercado.putProduto(product1).then((response: any) => {
      console.log("funcionou pedido = ", response);
      this.result = response;
      this.apimercado.showMessage('Produto Atualizado com Sucesso !')
      this.router.navigate(['/produtos']);

      
      this.spinner.hide();

    })
      .catch((response) => {
        console.log("deu erro pedido = ", response);
        this.result = response;
      });
  }



  /** Cancela a atualização */

  cancel(): void {
    this.router.navigate(['/produtos']);
  }

}
