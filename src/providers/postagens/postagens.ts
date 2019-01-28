import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastController } from 'ionic-angular';
import { resolve } from 'url';

/*
  Generated class for the PostagensProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostagensProvider {

  private baseURL = "http://aulas2.getsandbox.com";

  constructor(public http: HttpClient, public toastController:ToastController) {
    console.log('Hello PostagensProvider Provider');
  }

  getUltimoPost(){
    //return this.http.get(this.baseURL + "/last_post");
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + "/last_post").subscribe(res => {
      resolve(res);
      }, (err) => {
      this.erroReq();
      });
      });
  }

  getListaPosts(){
    //return this.http.get(this.baseURL + "/posts");
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + "/posts").subscribe(res => {
      resolve(res);
      }, (err) => {
      this.erroReq();
      });
      });
  }

  getMensagens(data){
    //return this.http.get(this.baseURL +'/msgs/'+ data);
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL +'/msgs/'+ data).subscribe(res => {
      resolve(res);
      }, (err) => {
      this.erroReq();
      });
      });
  }

  async erroReq() {
    const toast = await this.toastController.create({
      message: 'Conecte-se a internet!',
      duration: 3000
    });
    console.log('toast');
    toast.present();
  }

  async notPosts() {
    const toast = await this.toastController.create({
      message: 'Não há posts para esse usuário!',
      duration: 3000
    });
    console.log('toast');
    toast.present();
  }

}
