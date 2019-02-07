import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Storage } from '@ionic/storage';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {

  private url:string = "http://aulas2.getsandbox.com";
  public fotoURL:string = null;
  
  
  

  constructor(public http: HttpClient,
              public storage : Storage) {
    console.log('Hello AuthProvider Provider');

  }

  postUsuario(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url +'/login', data).subscribe(res => {
      resolve(res);
      }, (err) => {
      reject(err);
      });
      });
    
  
  }

  setCheckbox(data){
    this.storage.set("checkbox", data);
  }

  getCheckbox(){
    return this.storage.get("checkbox");
  }


  removeCheckbox(){
   return this.storage.remove("checkbox");
  }


  setUser(data){
    this.storage.set("user", data);
  }

  getUser(){
    return this.storage.get("user");
  }


  removeUser(){
   return this.storage.remove("user");
  }

  setFoto(data){
    this.storage.set("foto", data);
  }

  getFoto(){
    return this.storage.get("foto");
  }

  
}
