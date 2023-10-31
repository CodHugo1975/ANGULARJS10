import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css']
})
export class AddEditCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cat:any;
  CategoryID:number;
  Name:string;

  ngOnInit(): void {
    this.CategoryID=this.cat.CategoryID;
    this.Name=this.cat.Name;
  }

  addCategory(){
    var val = {CategoryId:this.CategoryID,
                Name:this.Name                          
              };
    this.service.addCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCategory(){
    var val = {CategoryID:this.CategoryID,
      Name:this.Name       
    };
    this.service.updateCategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
