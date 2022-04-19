import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = "http://localhost:8080/api/product"
  constructor(private httpClient: HttpClient) { }

  getProductList(categoryId:number) : Observable<Product[]>{

    const searchURL = `${this.baseUrl}/search/findByCategoryNameId?id=${categoryId}`;

    return this.httpClient.get<GetResponse>(searchURL).pipe(
      map(response => response._embedded.product)
    );
  }
}
interface GetResponse{
  _embedded:{
    product:Product[]
  }
}
