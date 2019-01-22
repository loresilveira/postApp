import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { PostagensProvider } from '../../providers/postagens/postagens';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public mensagemProvider:PostagensProvider) {
    console.log('Hello Mensagens Page');
    this.id = navParams.get('usuario.id'); 
    console.log('msg page:'+this.id);
    this.getMsg();     
  }

  getMsg(){
    
    let data: Observable<any>;
    data = this.mensagemProvider.getMensagens(this.id);
    data.subscribe(result => { 
    this.items = result;
    this.mensagens = this.items;
    console.log(this.mensagens); },
      
      error => console.log(error));
       
       
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
