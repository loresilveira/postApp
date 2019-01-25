import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PostsPage } from '../posts/posts';
import { MensagensPage } from '../mensagens/mensagens';
import { DetPostPage } from '../det-post/det-post';
import { AlteraFotoPage } from '../altera-foto/altera-foto';
import { PostComponent } from '../../components/post/post';
import { PostagensProvider } from '../../providers/postagens/postagens';
import { Observable } from 'rxjs';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [
    PostagensProvider
  ]
})
export class PerfilPage {

  public postCard: any;
  usuario;
  nome:string;
  sobrenome:string;
  letras:string;
  foto:string = null;
  flag:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postagemProvider: PostagensProvider, public authProvider:AuthProvider) {

    this.postCard = {
      "autor": "",
      "titulo": "",
      "mensagem": "",
      "data": ""
    }

    this.usuario = navParams.get('usuario');
    console.log(this.usuario);
    this.iniciais();
  }

  iniciais(){
    this.nome = this.usuario.nome.charAt(0);
    let aux:string[] = this.usuario.nome.split(" ", 3);
    this.sobrenome = aux[2].charAt(0);
    this.letras = this.nome.concat(this.sobrenome);
    console.log('split:'+this.letras);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    let data: Observable<any>;
    data = this.postagemProvider.getUltimoPost();
    data.subscribe(result => { this.postCard = result
    console.log(this.postCard) },
      error => console.log(error));

  }

  ionViewWillEnter(){
    // this.foto = this.navParams.get('foto');
    // console.log(this.foto);

    this.foto = this.authProvider.getFoto();
   
    if(this.foto != null) {
      this.letras = this.authProvider.setFoto(this.foto);
     
    } 
    
  }
   
  
  

  goToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

  goToPostPage() {
    this.navCtrl.push(PostsPage, {'usuario':this.usuario});
  }

  goToMensagensPage() {
    this.navCtrl.push(MensagensPage, {'usuario.id':this.usuario.id});
  }

  goToDetPostPage() {
    this.navCtrl.push(DetPostPage, {'detPost':this.postCard});
  }

  goToPageAlteraFoto() {
    this.navCtrl.push(AlteraFotoPage);
  }

}
