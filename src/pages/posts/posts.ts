import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostagensProvider } from '../../providers/postagens/postagens';
import { Observable } from 'rxjs';
import { DetPostPage } from '../det-post/det-post';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
 
   providers: [
    PostagensProvider
  ] 
})
export class PostsPage {

  public postCard:any;
  nome:string;
  sobrenome:string;
  letras:string;
  usuario;
  foto:string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postagemProvider:PostagensProvider,public authProvider:AuthProvider) {
    // this.usuario = navParams.get('usuario');  
    // this.iniciais();
    this.carregaFoto();  

  }

  iniciais(){
    this.nome = this.usuario.nome.charAt(0);
    let aux:string[] = this.usuario.nome.split(" ", 3);
    this.sobrenome = aux[2].charAt(0);
    this.letras = this.nome.concat(this.sobrenome);
    console.log('split:'+this.letras);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetPostPage');

    
    let data:Observable<any>;
    data = this.postagemProvider.getListaPosts();
    data.subscribe(result => {this.postCard = result}, 
      error =>console.log(error) );

    
  } 

  carregaFoto(){
    this.authProvider.getFoto().then((result) => { this.foto = result });
    this.usuario = this.navParams.get('usuario');
    console.log('usuarioooo :' + this.usuario);
    if (this.usuario == undefined) {
      this.authProvider.getUser().then((result) => {
      this.usuario = result
        console.log('storage user :' + this.usuario)
        this.iniciais();
      });
    }else{
      this.iniciais();
    }
    
  }

  goToDetPost(){
    this.navCtrl.push(DetPostPage, {'detPost':this.postCard}  )
  }

}
