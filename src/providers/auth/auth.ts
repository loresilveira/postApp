import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {

  private url:string = "http://aulas2.getsandbox.com";
  public fotoURL:string = null;
  
  
  

  constructor(public http: HttpClient) {
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

  setFoto(foto){
    return this.fotoURL = foto;
    
  }

  getFoto(){
    return this.fotoURL;
  }

  

 
  

  

}
