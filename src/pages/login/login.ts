import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario = {
    "id": "",
    "nome": "",
    "senha": ""
  }
  
 
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  salvaUsuario(){

    /*const hasha = (this.usuario.senha, [SHA_256,Base64]) => {
      SHA_256 = SHA_256 || {};
    
      let outputEncoding = opts.encoding || 'hex';
    
      if (outputEncoding === 'buffer') {
        outputEncoding = undefined;
      }
    
      const hash = crypto.createHash(opts.algorithm || 'sha512');
    
      const update = buf => {
        const inputEncoding = typeof buf === 'string' ? 'utf8' : undefined;
        hash.update(buf, inputEncoding);
      };
    
      if (Array.isArray(input)) {
        input.forEach(update);
      } else {
        update(input);
      }
    
      return hash.digest(outputEncoding);
    };
    console.log(hasha);
    
    /** .then(hash => {
      console.log(hash);
    });   */

    /**
     * this.authProvider.postUsuario(this.usuario).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
     */

  }
 
  goToPerfilPage() {
    this.navCtrl.push(PerfilPage);
    
  }


}
