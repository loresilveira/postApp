import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { PostagensProvider } from '../../providers/postagens/postagens';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the MensagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensagens',
  templateUrl: 'mensagens.html',
  
})
export class MensagensPage {

  searchQuery: string = '';
  public id;
  items;
  msg;
  mensagens:any = new Array;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public mensagemProvider:PostagensProvider, 
              public authProvider:AuthProvider,
              public toastController:ToastController) {

    console.log('Hello Mensagens Page');
    this.id = navParams.get('usuario.id'); 
       
  }

  ionViewDidLoad(){
    this.getMsg();
  }

  getMsg(){
    this.authProvider.abreCarregando();
    this.mensagemProvider.getMensagens(this.id).then(result => { 
    this.items = result;
    this.mensagens = this.items;
    console.log(this.mensagens); },
      error => this.notMessages());
    this.authProvider.fechaCarregando();  
       
       
  }

  async notMessages() {
    const toast = await this.toastController.create({
      message: 'Não há mensagens para esse usuário!',
      duration: 3000
    });
    console.log('toast');
    toast.present();
  }

  async toastNotFound() {
    const toast = await this.toastController.create({
      message: 'Mensagem não encontrada',
      duration: 1000,
      position: 'middle'
    });
    console.log('toast');
    toast.present();
  }

  onBlur($event){
    this.toastNotFound();
  }


    getItems(ev: any) {
    
    this.items = this.mensagens;
      // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } 
  }
  
  onClear($event){
    this.items = this.mensagens;
  }



}
