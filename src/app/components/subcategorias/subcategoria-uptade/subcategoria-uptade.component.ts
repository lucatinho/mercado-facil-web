import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImageService } from './../../image.service';
import { VariablesService } from './../../variables.service';
import { SubCategoria } from './../subcategoria.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../../apimercado.service';

@Component({
  selector: 'app-subcategoria-uptade',
  templateUrl: './subcategoria-uptade.component.html',
  styleUrls: ['./subcategoria-uptade.component.css']
})
export class SubcategoriaUptadeComponent implements OnInit {

  UpadateUrl = "https://apimercado-central.herokuapp.com/api/mercado1/subcategoria"

  subcategora: any = {
    nomeSubCategoria: '',
    imgSubCategoria:''

  }

  result: any;

  SubCategoria: SubCategoria = {
    
    nomeSubCategoria:'',
    imgSubCategoria: '',

  }

      // img
      imageTitle: string;
      imageDescription: string;
      imageFile: File = null;
      //  !img
  

  constructor(private router: Router,
              private route: ActivatedRoute,
              private imageService: ImageService,
              private http: HttpClient,
              private snackBar: MatSnackBar,
              private spinner: NgxSpinnerService,
              private variables: VariablesService,
              private apimercado: ApimercadoService
   ) { }

  ngOnInit(): void {


    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.readById(id).subscribe(SubCategoria => {
      this.SubCategoria = SubCategoria;
      console.log(this.SubCategoria)
    })
    


  }

  OnSumbit(form){
    console.log(form.value)
    this.addImage();
  }

  showMessage(msg: string,
    ): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: ['msg-success']
    })

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
      this.subcategora.imgSubCategoria = this.result.data.link;
      this.createSubcategoria();
    })
      .catch((response) => {
        console.log("Erro add img = ", response);
        this.result = response;
        this.spinner.hide();
        alert("Erro ao carregar imagem, tente novamente mais tarde !")
      });
    }else{
      this.createSubcategoria();
    }
  }

  readById(idSubCategoria: number){

    let username = 'mercadoadm'
    let password = '123'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    let url = "https://apimercado-central.herokuapp.com/api/mercado" 
    let mercado = this.variables.getSessao().infoMercado.idMercado
    const subUrl = `${url}${mercado}/subcategoria/${idSubCategoria}`


    return this.http.get<SubCategoria>(subUrl, { headers })
  }

  createSubcategoria() {
    let subcategora:any;

    if (this.imageFile != null) {
      subcategora = {
        idSubCategoria: this.SubCategoria.idSubCategoria,
        nomeSubCategoria: this.SubCategoria.nomeSubCategoria,
        imgSubCategoria: this.result.data.link
      }
    }else{
      subcategora = {
        idSubCategoria: this.SubCategoria.idSubCategoria,
        nomeSubCategoria: this.SubCategoria.nomeSubCategoria,
        imgSubCategoria: this.SubCategoria.imgSubCategoria
      }
    }
   
    this.apimercado.putSubcategoria(subcategora).then((response: any) => {
      console.log("funcionou subcategora = ", response);
      this.apimercado.showMessage('Operação Realizada com Sucesso !');
      this.router.navigate(['/subCategoria']);
      this.spinner.hide();
      this.result = response;
    })
      .catch((response) => {
        console.log("deu erro subcategora = ", response);
        this.spinner.hide();
        this.result = response;
        this.apimercado.showMessage('Ocorreu um erro!');
      });
  }

  cancel(): void {
    this.router.navigate(['/subCategoria']);
  }
}
