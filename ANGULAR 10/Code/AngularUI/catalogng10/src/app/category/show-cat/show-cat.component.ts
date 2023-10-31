import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoryList:any=[];

  ModalTitle:string;
  ActivateAddEditCatComp:boolean=false;
  cat:any;

  CategoryIdFilter:string="";
  CategoryNameFilter:string="";
  CategoryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCatList();
  }

  addClick(){
    this.cat={
      CategoryID:0,
      Name:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp=true;

  }

  editClick(item){
    this.cat=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCatComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteCategory(item.CategoryID).subscribe(data=>{
        alert(data.toString());
        this.refreshCatList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshCatList();
  }


  refreshCatList(){
    this.service.getCatList().subscribe(data=>{
      this.CategoryList=data;
      this.CategoryListWithoutFilter=data;



    });
  }

  FilterFn(){
    var CategoryIdFilter = this.CategoryIdFilter;
    var CategoryNameFilter = this.CategoryNameFilter;

    this.CategoryList = this.CategoryListWithoutFilter.filter(function (el){
        return el.CategoryId.toString().toLowerCase().includes(
          CategoryIdFilter.toString().trim().toLowerCase()
        )&&
        el.Name.toString().toLowerCase().includes(
          CategoryNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(cat,asc){
    this.CategoryList = this.CategoryListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[cat]>b[cat])?1 : ((a[cat]<b[cat]) ?-1 :0);
      }else{
        return (b[cat]>a[cat])?1 : ((b[cat]<a[cat]) ?-1 :0);
      }
    })
  }



}
