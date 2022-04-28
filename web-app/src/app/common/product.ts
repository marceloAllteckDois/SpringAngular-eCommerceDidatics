import { ProductCategory } from './ProductCategory';
export class Product {
    id:number=0;
    sku: string="";
    name:string="";
    description:string="";
    unitPrice:number=0;
    urlImage:string="";
    active:boolean=false;
    unitsInStock:number=0;
    dateCreation: Date=new Date();
    lastUpdated:Date=new Date();
    productCategory:ProductCategory=new ProductCategory()
    constructor(){

    }

}
