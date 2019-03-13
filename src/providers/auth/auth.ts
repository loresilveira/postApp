import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {

  private url:string = "http://aulas2.getsandbox.com";
  public loading;
  public fotoURL:string = null;

  constructor(public http: HttpClient,
     public loadingCtrl:LoadingController, 
     public toastController:ToastController,
     public storage : Storage) {
    console.log('Hello AuthProvider Provider');

  }

  postUsuario(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url +'/login', data).subscribe(res => {
      resolve(res);
      }, (error) => {
        let toast = this.toastController.create({
          message: "Conecte-se à internet",
          duration: 3000
        });
        console.log(toast);
        toast.present();
      });
      });
    
  
  }

  abreCarregando() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando' 
    });

    this.loading.present();
  }

  fechaCarregando(){
    this.loading.dismiss();
  }

  async erroReq() {
    const toast = await this.toastController.create({
      message: 'Conecte-se a internet!',
      duration: 3000
    });
    console.log('toast');
    toast.present();
  }

  async loginToast() {
    const toast = await this.toastController.create({
      message: 'Login efetuado com sucesso!',
      duration: 2000
    });
    console.log('toast');
    toast.present();
  }

  async logoutToast() {
    const toast = await this.toastController.create({
      message: 'Você saiu do app',
      duration: 3000
    });
    console.log('toast');
    toast.present();
  }

  async erroLoginToast() {
    const toast = await this.toastController.create({
      message: 'Usuário ou senha inválido!',
      duration: 3000
    });
    console.log('toast');
    toast.present();
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
