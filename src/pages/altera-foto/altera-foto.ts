import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoginPage } from '../login/login';
import { PerfilPage } from '../perfil/perfil';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../model/user.model';


/**
 * Generated class for the AlteraFotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-altera-foto',
  templateUrl: 'altera-foto.html'
})
export class AlteraFotoPage {
  photo: string = '';
  
  imagem;

  img= "";
  usuario : User;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private camera: Camera,
              public authProvider: AuthProvider) {
             // this.usuario = navParams.get('usuario');
             this.authProvider.getFoto().then((result)=> this.photo = result);
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlteraFotoPage');
  }

  takePicture() {
      const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      allowEdit: false
      
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;
        this.authProvider.setFoto(this.photo);
        
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  getImage(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: true,
      allowEdit: false
    }

    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;
        this.authProvider.setFoto(this.photo);
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  
  
  
  
  // openCamera(foto){
  //   const options: CameraOptions = {
  //     quality: 50,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: foto == "foto" ? this.camera.PictureSourceType.CAMERA :
  //     this.camera.PictureSourceType.SAVEDPHOTOALBUM,
  //     correctOrientation: true,
  //     saveToPhotoAlbum: true
  //   }

  //   this.camera.getPicture(options).then((imageData) => {

  //     this.usuario.fotoPerfil = 'data:image/jpeg;base64,' + imageData;
  //     this.nativeStorage.setItem("user", JSON.stringify(this.usuario));
  //   }, (err) => {
  //     alert("Erro ao gravar o arquivo:"+JSON.stringify(err));
  //   });
  // }

}

