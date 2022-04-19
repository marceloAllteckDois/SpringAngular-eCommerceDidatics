import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]=[];
  productCategoryId:number=0;
  charId?:string="";
  constructor(private productService: ProductService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(()=>{this.listProduct();});

  }

  listProduct(){

    const hasCategoryId:boolean = this.router.snapshot.paramMap.has("id");
    if(hasCategoryId){
      if(this.router.snapshot.paramMap.get("id")!=null) this.charId=this.router.snapshot.paramMap.get("id")?.toString();
      this.productCategoryId = parseInt(this.charId!);
    }
    else this.productCategoryId=6;

    this.productService.getProductList(this.productCategoryId).subscribe(
      data=>{
        this.products = data;
      }
    )
  }
}
