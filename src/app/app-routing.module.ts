import { RelatoriosCrudComponent } from './views/relatorios-crud/relatorios-crud.component';
import { InfoFinalizadosComponent } from './components/pedidos/pedido-finalizados/info-finalizados/info-finalizados.component';
import { InfoProntoComponent } from './components/pedidos/pedido-pronto/info-pronto/info-pronto.component';
import { PedidoProntoComponent } from './components/pedidos/pedido-pronto/pedido-pronto.component';
import { LoginComponent } from './views/login/login.component';
import { PedidoDeleteComponent } from './components/pedidos/pedido-delete/pedido-delete.component';
import { InfoEnviadoComponent } from './components/pedidos/pedido-enviado/info-enviado/info-enviado.component';
import { PedidoInfoComponent } from './components/pedidos/pedido-separacao/pedido-info/pedido-info.component';
import { PedidoEnviadoComponent } from './components/pedidos/pedido-enviado/pedido-enviado.component';
import { PedidoSeparacaoComponent } from './components/pedidos/pedido-separacao/pedido-separacao.component';
import { SeparacaoComponent } from './views/pedidos/separacao/separacao.component';
import { FinalizadosComponent } from './views/pedidos/finalizados/finalizados.component';
import { MercadoFecharComponent } from './components/mercados/mercado-fechar/mercado-fechar.component';
import { MercadoInfoComponent } from './views/mercado-info/mercado-info.component';
import { SubcategoriaUptadeComponent } from './components/subcategorias/subcategoria-uptade/subcategoria-uptade.component';
import { CategoriaUptadeComponent } from './components/categorias/categoria-uptade/categoria-uptade.component';
import { SubcategoriaCrudComponent } from './views/subcategoria-crud/subcategoria-crud.component';
import { CategoriaReadComponent } from './components/categorias/categoria-read/categoria-read.component';
import { MarcaUpdateComponent } from './components/marcas/marca-update/marca-update.component';
import { MarcaCreateComponent } from './components/marcas/marca-create/marca-create.component';
import { MarcasCrudComponent } from './views/marcas-crud/marcas-crud.component';
import { MarcaReadComponent } from './components/marcas/marca-read/marca-read.component';
import { PedidoUpdateComponent } from './components/pedidos/pedido-update/pedido-update.component';
import { PedidosCrudComponent } from './views/pedidos-crud/pedidos-crud.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProdutosCrudComponent} from './views/produtos-crud/produtos-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { CategoriaCrudComponent } from './views/categoria-crud/categoria-crud.component';
import { CategoriaCreateComponent } from './components/categorias/categoria-create/categoria-create.component';
import { SubcategoriaCreateComponent } from './components/subcategorias/subcategoria-create/subcategoria-create.component';
import { MercadoAlterarComponent } from './components/mercados/mercado-alterar/mercado-alterar.component';
import { PedidoFinalizadosComponent } from './components/pedidos/pedido-finalizados/pedido-finalizados.component';
import { RelatorioTotalVendaComponent } from './components/relatorios/relatorio-total-venda/relatorio-total-venda.component';


const routes: Routes = [{
  path:"",
  component : HomeComponent
},
{
  path:"produtos",
  component: ProdutosCrudComponent
},
{
  path:"products/create",
  component: ProductCreateComponent
},
{
  path:"products/update/:id",
  component: ProductUpdateComponent
},
{
  path:"products/delete/:id",
  component: ProductDeleteComponent
},
{
  path:"pedidos",
  component: PedidosCrudComponent
},
{
  path:"pedido/update",
  component: PedidoUpdateComponent
},
{
  path:"marcas",
  component: MarcasCrudComponent
},
{
  path:"marca/create",
  component: MarcaCreateComponent
},
{
  path:"marca/update/:id",
  component: MarcaUpdateComponent
},
{
  path:"categoria",
  component: CategoriaCrudComponent
},
{
  path:"categoria/create",
  component: CategoriaCreateComponent
},
{
  path:"categoria/update/:id",
  component: CategoriaUptadeComponent
},
{
  path:"subCategoria",
  component: SubcategoriaCrudComponent
},
{
  path:"subCategoria/create",
  component: SubcategoriaCreateComponent
},
{
  path:"subCategoria/update/:id",
  component: SubcategoriaUptadeComponent
},
{
  path:"mercadoInfo",
  component: MercadoInfoComponent
},
{
  path:"mercado/alterar",
  component: MercadoAlterarComponent
},
{
  path:"mercado/fechar",
  component: MercadoFecharComponent
},
{
  path:"pedido/finalizados",
  component: PedidoFinalizadosComponent
},
{
  path:"finalizados/info",
  component: InfoFinalizadosComponent
},
{
  path:"pedido/separacao",
  component: PedidoSeparacaoComponent
},
{
  path:"separacao/info",
  component: PedidoInfoComponent
},
{
  path:"pedido/enviado",
  component: PedidoEnviadoComponent
},
{
  path:"enviado/info",
  component: InfoEnviadoComponent
},
{
  path:"pedido/recusar",
  component: PedidoDeleteComponent
},
{
  path:"login",
  component: LoginComponent
},
{
  path:"pedido/pronto",
  component: PedidoProntoComponent
},
{
  path:"pronto/info",
  component: InfoProntoComponent
},
{
  path:"relatorios",
  component: RelatoriosCrudComponent
},
{
  path:"relatorio-venda-total",
  component: RelatorioTotalVendaComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
