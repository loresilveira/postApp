import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { FormBuilder, Validators } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard';
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
  
  public loginForm: any;

  nome='';
  senha='';

  usuario = {
    "id":"",
    "nome":"",
    "senha": ""
  }

  messageNome = ""
  messagePassword = "";
  errorNome = false;
  errorPassword = false;
  disabled = true;
 
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              formBuilder: FormBuilder) {
              /**
               this.loginForm = formBuilder.group({
                  nome: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20),
                    Validators.required])],
                  senha: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(20),
                  Validators.required])],
                });
               */

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
      
  }

  goToPerfilPage(){
    this.navCtrl.push(PerfilPage); 
  }

 /** 
  login() {
    let { email, password } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.errorNome = true;
        this.messageNome = "O usuário precisa ter de 3 a 20 caracteres";
      } else {
        this.messageNome = "";
      }

      if (!password.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha precisa ter de 4 a 20 caracteres";
      } else {
        this.disabled = false;
        this.messagePassword = "";
        
      }
    }
    else {
      alert("Login Realizado");
    }
  }
*/ 
 
}
