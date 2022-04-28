import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product=new Product();
  constructor(private productService:ProductService, private router:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.router.paramMap.subscribe(()=>{
      this.handleProductDetail();

    });
  }
  handleProductDetail() {

    this.productService.getProduct(parseInt(this.router.snapshot.paramMap.getAll('product-id')[0])).subscribe(
      data => {
        this.product=data;
      }
    )
    console.log(this.product.description);
  }
}
