import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PostsPage } from '../posts/posts';
import { MensagensPage } from '../mensagens/mensagens';
import { DetPostPage } from '../det-post/det-post';
import { PostComponent } from '../../components/post/post';
import { PostagensProvider } from '../../providers/postagens/postagens';
import { Observable } from 'rxjs';
import { AlteraFotoPage } from '../altera-foto/altera-foto';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '../model/user.model';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [
    PostagensProvider,

  ]
})
export class PerfilPage {

  public postCard: any;
  usuario: User;
    nome:string;
  sobrenome:string;
  letras:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public postagemProvider: PostagensProvider,
              private native: NativeStorage) {

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

    ionViewWillEnter(){
    if(this.usuario.fotoPerfil != null){
      this.letras = null;
    }
  }

  iniciais(){
    if(this.usuario.fotoPerfil == null){
    this.nome = this.usuario.nome.charAt(0);
    let aux:string[] = this.usuario.nome.split(" ", 3);
    this.sobrenome = aux[2].charAt(0);
    this.letras = this.nome.concat(this.sobrenome);
    console.log('split:'+this.letras);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    let data: Observable<any>;
    data = this.postagemProvider.getUltimoPost();
    data.subscribe(result => { this.postCard = result
    console.log(this.postCard) },
      error => console.log(error));

  }

  goToLoginPage() {
    this.native.remove("user")
    .then((result:any)=>{
      this.navCtrl.setRoot(LoginPage.name);
    });

  }

  goToPostPage() {
    this.navCtrl.push(PostsPage.name, {'usuario':this.usuario});
  }

  goToMensagensPage() {
    this.navCtrl.push(MensagensPage.name, {'usuario.id':this.usuario.id});
  }

  goToDetPostPage() {
    this.navCtrl.push(DetPostPage.name, {'detPost':this.postCard});
  }

  goToAlteraFotoPage() {
    this.navCtrl.push(AlteraFotoPage.name, {'usuario':this.usuario});
  }

}
