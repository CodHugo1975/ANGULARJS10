import { Component, Input, OnInit, Injectable } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { ProductLoggerService } from 'src/app/productServices/productlogger.service';

@Component({
  selector: 'app-add-edit-prod',
  templateUrl: './add-edit-prod.component.html',
  styleUrls: ['./add-edit-prod.component.css'],
  providers: [ProductLoggerService]
})

@Injectable()
export class AddEditProdComponent implements OnInit {

  constructor(private service:SharedService, private logger: ProductLoggerService) { }

  @Input() prod:any;
  ProductID:number;
  Name:string;
  Description:string;
  CategoryName:string;
  catID:number;
  Image:string;
  PhotoFilePath:string;

  CategoryList:any=[];

  ngOnInit(): void {
    this.loadCategoryList();
  }

  loadCategoryList(){
    this.service.getAllCategoryNames().subscribe((data:any)=>{
      this.CategoryList=data;

      this.ProductID=this.prod.ProductID;
      this.Name=this.prod.Name;
      this.Description=this.prod.Description;
      this.CategoryName=this.prod.CategoryName;

      this.Image=this.prod.Image;

      this.PhotoFilePath=this.service.PhotoUrl+this.Image;
    });
  }


  addProduct(){
    var val = {ProductID:this.ProductID,
                Name:this.Name,
                Description:this.Description,                
                CategoryName:this.CategoryName,
                Image: this.Image              
              };
    this.service.addProduct(val).subscribe(res=>{
      alert(res.toString());     
      this.logger.LogMessage(this.Name);      
    });
  }

  updateProduct(){
    var val = {ProductID:this.ProductID,
      Name:this.Name,
      Description:this.Description,
      CategoryName:this.CategoryName,
      Image: this.Image            
    };
    this.service.updateProduct(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.Image=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.Image;
    })
  }

}
