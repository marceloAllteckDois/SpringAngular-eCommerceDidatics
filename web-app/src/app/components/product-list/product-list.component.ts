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
  searchFlag:boolean=false;
  constructor(private productService: ProductService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(()=>{this.listProduct();});

  }

  listProduct(){
    this.searchFlag=this.router.snapshot.paramMap.has('keyword');
    if(this.searchFlag){
      this.handlerSearch();
    }
    else
      this.handlerList();
  }

  private handlerSearch() {
    let keyWord=this.router.snapshot.paramMap.get('keyword');
    this.productService.searchProductList(keyWord!).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.products = data;
      }
    );
  }

  private handlerList() {
    const hasCategoryId: boolean = this.router.snapshot.paramMap.has("id");
    if (hasCategoryId) {
      if (this.router.snapshot.paramMap.get("id") != null)
        this.charId = this.router.snapshot.paramMap.get("id")?.toString();
      this.productCategoryId = parseInt(this.charId!);
    }
    else
      this.productCategoryId = 6;

    this.productService.getProductList(this.productCategoryId).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.products = data;
      }
    );
  }
}
