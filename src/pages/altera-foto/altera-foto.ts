import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoginPage } from '../login/login';
import { PerfilPage } from '../perfil/perfil';
import { AuthProvider } from '../../providers/auth/auth';
;

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private camera: Camera, public authProvider:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlteraFotoPage');
  }

  takePicture() {
    this.photo = '';
 
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      
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

  
  
  
  
}
