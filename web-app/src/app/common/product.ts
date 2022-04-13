export class Product {
    sku: string="";
    name:string="";
    description:string="";
    unitPrice:number=0;
    urlImage:string="";
    active:boolean=false;
    unitsInStock:number=0;
    dateCreation: Date=new Date();
    lastUpdated:Date=new Date();
    constructor(){

    }

}
