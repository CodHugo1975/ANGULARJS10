import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http:HttpClient) { }

  getProdList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Product');
  }

 addProduct(val:any){
   return this.http.post(this.APIUrl+'/Product', val);
 }

 updateProduct(val:any){
  return this.http.put(this.APIUrl+'/Product', val);
 }

 deleteProduct(val:any){
  return this.http.delete(this.APIUrl+'/Product/'+val);
 }

////////////////////////////////////////////////


getCatList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Category');
}

addCategory(val:any){
 return this.http.post(this.APIUrl+'/Category', val);
}

updateCategory(val:any){
return this.http.put(this.APIUrl+'/Category', val);
}

deleteCategory(val:any){
return this.http.delete(this.APIUrl+'/Category/'+val);
}


UploadPhoto(val:any){
  return this.http.post(this.APIUrl+'/Product/SaveFile',val);
}


getAllCategoryNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/Product/GetAllCategoryNames');
}

}
