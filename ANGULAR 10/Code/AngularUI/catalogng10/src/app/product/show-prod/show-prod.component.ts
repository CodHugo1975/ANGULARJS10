import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductList:any=[];

  ModalTitle:string;
  ActivateAddEditProdComp:boolean=false;
  prod:any;

  ProductIdFilter:string="";
  ProductNameFilter:string="";
  ProductListWithoutFilter:any=[];



  ngOnInit(): void {
    this.refreshProdList();
  }

  addClick(){
    this.prod={
      ProductId:0,
      Name:"",
      Description:"",
      Image:"genericproduct.png"
    }
    this.ModalTitle="Add Product";
    this.ActivateAddEditProdComp=true;

  }

  editClick(item){
    this.prod=item;
    this.ModalTitle="Edit Product";
    this.ActivateAddEditProdComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteProduct(item.ProductID).subscribe(data=>{
        alert(data.toString());
        this.refreshProdList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProdComp=false;
    this.refreshProdList();
  }


  refreshProdList(){
    this.service.getProdList().subscribe(data=>{
      this.ProductList=data;
      this.ProductListWithoutFilter=data;
      console.log("got grid refreshed.");

    });
  }

  FilterFn(){
    var ProductIdFilter = this.ProductIdFilter;
    var ProductNameFilter = this.ProductNameFilter;

    this.ProductList = this.ProductListWithoutFilter.filter(function (el){
        return el.ProductId.toString().toLowerCase().includes(
          ProductIdFilter.toString().trim().toLowerCase()
        )&&
        el.ProductName.toString().toLowerCase().includes(
          ProductNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.ProductList = this.ProductListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }


}
