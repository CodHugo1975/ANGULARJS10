export class ProductLoggerService{

  LogMessage(productname: string){
    console.log('A new product with product name "'+productname+'" has been added.');
  }
  
}