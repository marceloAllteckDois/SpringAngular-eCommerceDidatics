import { ProductService } from 'src/app/services/product.service';
import { ProductCategory } from './../../common/ProductCategory';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories:ProductCategory[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getCategoryList().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.productCategories=data;
      }
    );
  }

}
