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

  private url:string = "http://localhost:3000";


  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  postUsuario(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url +'/usuarios', data).subscribe(res => {
      resolve(res);
      }, (err) => {
      reject(err);
      });
      });
    
  
  }


  

}
