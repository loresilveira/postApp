import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PostsPage } from '../posts/posts';
import { MensagensPage } from '../mensagens/mensagens';
import { DetPostPage } from '../det-post/det-post';
import { PostComponent } from '../../components/post/post';
import { PostagensProvider } from '../../providers/postagens/postagens';
import { Observable } from 'rxjs';
import { AuthProvider } from '../../providers/auth/auth';
import { AlteraFotoPage } from '../altera-foto/altera-foto';
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
  public usuario: any;
  nome: string;
  sobrenome: string;
  letras: string = null;
  foto: string = null;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public postagemProvider: PostagensProvider,
    public authProvider: AuthProvider) {

    this.postCard = {
      "autor": "",
      "titulo": "",
      "mensagem": "",
      "data": ""
    } 

    this.usuario = {
      "id":"",
      "login":"",
      "nome":""
    }

    
  }

  ionViewWillEnter() {
    // this.authProvider.get('user').then((result) => {
    // this.usuario = result
    //   this.iniciais();
    // });
    this.authProvider.getFoto().then((result) => { this.foto = result });
  }

  ngOnInit() {
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
    this.authProvider.getFoto().then((result) => { this.foto = result });
  }


  iniciais() {

    this.nome = this.usuario.nome.charAt(0);
    let aux: string[] = this.usuario.nome.split(" ", 3);
    this.sobrenome = aux[2].charAt(0);
    this.letras = this.nome.concat(this.sobrenome);
    console.log('split:' + this.letras);

  }

  ionViewDidLoad() {
    
    this.getLastPost(); 
    this.authProvider.loginToast();

  }

  getLastPost(){
    console.log('ionViewDidLoad PerfilPage');
    this.postagemProvider.getUltimoPost().then(result => { this.postCard = result
    console.log(this.postCard) },
      error => this.postagemProvider.notPosts());
    this.authProvider.fechaCarregando(); 
  }

  

  goToLoginPage() {
    
    this.authProvider.removeUser()
      .then((result: any) => {
        this.authProvider.removeCheckbox().then((res)=> {this.navCtrl.setRoot(LoginPage);});
        this.authProvider.logoutToast();
      });
    // let data: Observable<any>;
    // data = this.postagemProvider.getUltimoPost();
    // data.subscribe(result => {
    // this.postCard = result
    //   console.log(this.postCard)
    // },
    //   error => console.log(error));

  }

  goToPostPage() {
    this.navCtrl.push(PostsPage, { 'usuario': this.usuario });
  }

  goToMensagensPage() {
    this.navCtrl.push(MensagensPage, { 'usuario.id': this.usuario.id });
  }

  goToDetPostPage() {
    
    this.navCtrl.push(DetPostPage, {'detPost':this.postCard});
    this.authProvider.fechaCarregando();
  }

  goToPageAlteraFoto() {
    this.navCtrl.push(AlteraFotoPage);
  }

}
