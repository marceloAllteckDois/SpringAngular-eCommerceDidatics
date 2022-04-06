export class Product {
    sku: string="";
    name:string="";
    descripition:string="";
    unitPrice:number=0;
    imageUrl:string="";
    active:boolean=false;
    unitsInStock:number=0;
    dateCreation: Date=new Date();
    lastUpdated:Date=new Date();
    constructor(){

    }

}
