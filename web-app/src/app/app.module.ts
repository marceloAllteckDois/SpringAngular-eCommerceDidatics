import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent} from './components/search/search.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


const routes:Routes = [

  {
    path: "category/:id", component: ProductListComponent
  },
  {
    path: "category", component: ProductListComponent
  },
  {
    path: "product", component: ProductListComponent
  },
  {
    path: "product/:product-id", component: ProductDetailsComponent
  },
  {
    path: "", redirectTo: "product/", pathMatch:"full"
  },
  {
    path: "**", redirectTo: "product/", pathMatch:"full"
  },
  {
    path: "search/:keyword", component: ProductListComponent
  },



];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
