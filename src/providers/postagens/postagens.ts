import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the PostagensProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostagensProvider {

  private baseURL = "http://aulas.getsandbox.com";

  constructor(public http: HttpClient) {
    console.log('Hello PostagensProvider Provider');
  }

  getUltimoPost(){
    return this.http.get(this.baseURL + "/last_post");
  }

  getListaPosts(){
    return this.http.get(this.baseURL + "/posts");
  }

  getMensagens(data){
    return this.http.get(this.baseURL +'/msgs/'+ data);
  }

}
