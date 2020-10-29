import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProdutosCrudComponent } from './views/produtos-crud/produtos-crud.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { PedidoReadComponent } from './components/pedidos/pedido-read/pedido-read.component';
import { PedidoCreateComponent } from './components/pedidos/pedido-create/pedido-create.component';
import { PedidoDeleteComponent } from './components/pedidos/pedido-delete/pedido-delete.component';
import { PedidoUpdateComponent } from './components/pedidos/pedido-update/pedido-update.component';
import { PedidosCrudComponent } from './views/pedidos-crud/pedidos-crud.component';
import { MarcaReadComponent } from './components/marcas/marca-read/marca-read.component';
import { MarcaCreateComponent } from './components/marcas/marca-create/marca-create.component';
import { MarcasCrudComponent } from './views/marcas-crud/marcas-crud.component';
import { MarcaUpdateComponent } from './components/marcas/marca-update/marca-update.component';
import { CategoriaCrudComponent } from './views/categoria-crud/categoria-crud.component';
import { SubcategoriaCrudComponent } from './views/subcategoria-crud/subcategoria-crud.component';
import { CategoriaReadComponent } from './components/categorias/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/categorias/categoria-create/categoria-create.component';
import { CategoriaUptadeComponent } from './components/categorias/categoria-uptade/categoria-uptade.component';
import { SubcategoriaUptadeComponent } from './components/subcategorias/subcategoria-uptade/subcategoria-uptade.component';
import { SubcategoriaReadComponent } from './components/subcategorias/subcategoria-read/subcategoria-read.component';
import { SubcategoriaCreateComponent } from './components/subcategorias/subcategoria-create/subcategoria-create.component';

import { HomeComponent } from './views/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from'@angular/material/list';
import {MatCardModule} from'@angular/material/card';
import { MatMenuModule } from '@angular/material/menu'
import {MatButtonModule} from'@angular/material/button';
import {MatSnackBarModule} from'@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { MatTableModule } from '@angular/material/table';

import { MatDividerModule } from '@angular/material/divider';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatRadioModule } from '@angular/material/radio'

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MercadoInfoComponent } from './views/mercado-info/mercado-info.component';
import { MercadoPerfilComponent } from './components/mercados/mercado-perfil/mercado-perfil.component';
import { MercadoFecharComponent } from './components/mercados/mercado-fechar/mercado-fechar.component';
import { MercadoAlterarComponent } from './components/mercados/mercado-alterar/mercado-alterar.component';
import { PedidoFinalizadosComponent } from './components/pedidos/pedido-finalizados/pedido-finalizados.component';
import { PedidoSeparacaoComponent } from './components/pedidos/pedido-separacao/pedido-separacao.component';
import { FinalizadosComponent } from './views/pedidos/finalizados/finalizados.component';
import { SeparacaoComponent } from './views/pedidos/separacao/separacao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PedidoEnviadoComponent } from './components/pedidos/pedido-enviado/pedido-enviado.component';
import { PedidoInfoComponent } from './components/pedidos/pedido-separacao/pedido-info/pedido-info.component';
import { InfoEnviadoComponent } from './components/pedidos/pedido-enviado/info-enviado/info-enviado.component';
import { from } from 'rxjs';
import { LoginComponent } from './views/login/login.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { PedidoProntoComponent } from './components/pedidos/pedido-pronto/pedido-pronto.component';
import { InfoProntoComponent } from './components/pedidos/pedido-pronto/info-pronto/info-pronto.component';
import { InfoFinalizadosComponent } from './components/pedidos/pedido-finalizados/info-finalizados/info-finalizados.component';

//import { LocalStorage } from '@cedx/ngx-webstorage';

import {NgxWebstorageModule} from 'ngx-webstorage';
import { RelatoriosCrudComponent } from './views/relatorios-crud/relatorios-crud.component';
import { RelatoriosReadComponent } from './components/relatorios/relatorios-read/relatorios-read.component';

//import {StorageModule} from '@cedx/ngx-webstorage'

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutosCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    PedidoReadComponent,
    PedidoCreateComponent,
    PedidoDeleteComponent,
    PedidoUpdateComponent,
    PedidosCrudComponent,
    MarcaReadComponent,
    MarcaCreateComponent,
    MarcasCrudComponent,
    MarcaUpdateComponent,
    CategoriaCrudComponent,
    SubcategoriaCrudComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaUptadeComponent,
    SubcategoriaUptadeComponent,
    SubcategoriaReadComponent,
    SubcategoriaCreateComponent,
    MercadoInfoComponent,
    MercadoPerfilComponent,
    MercadoFecharComponent,
    MercadoAlterarComponent,
    PedidoFinalizadosComponent,
    PedidoSeparacaoComponent,
    FinalizadosComponent,
    SeparacaoComponent,
    PedidoEnviadoComponent,
    PedidoInfoComponent,
    InfoEnviadoComponent,
    LoginComponent,
    PedidoProntoComponent,
    InfoProntoComponent,
    InfoFinalizadosComponent,
    RelatoriosCrudComponent,
    RelatoriosReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    NgxWebstorageModule.forRoot(),
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue:'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
