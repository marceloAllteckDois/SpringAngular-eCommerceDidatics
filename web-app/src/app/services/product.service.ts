import { ProductCategory } from './../common/ProductCategory';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/product";
  private baseProductCategoryUrl = "http://localhost:8080/api/product-category";
  constructor(private httpClient: HttpClient) { }

  getCategoryList(): Observable<ProductCategory[]> {
    const searchURL = `${this.baseProductCategoryUrl}`;
    return this.httpClient.get<GetResponseProductCategory>(searchURL).pipe(
      map(response => response._embedded.productCategory)
    );
  }



  getProductList(categoryId:number) : Observable<Product[]>{
    const searchURL = `${this.baseUrl}/search/findByCategoryNameId?id=${categoryId}`;
    return this.httpClient.get<GetResponseProducts>(searchURL).pipe(
      map(response => response._embedded.product)
    );
  }
}
interface GetResponseProducts{
  _embedded:{
    product:Product[]
  }
}

interface GetResponseProductCategory{
  _embedded:{
    productCategory:ProductCategory[]
  }
}
