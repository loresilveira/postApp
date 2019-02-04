import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '../model/user.model';

@IonicPage()
@Component({
  selector: 'page-altera-foto',
  templateUrl: 'altera-foto.html',
})
export class AlteraFotoPage {

  img= "";
  usuario : User;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private camera: Camera,
              public nativeStorage: NativeStorage) {
              this.usuario = navParams.get('usuario');
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlteraFotoPage');
  }

  openCamera(foto){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: foto == "foto" ? this.camera.PictureSourceType.CAMERA :
      this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {

      this.usuario.fotoPerfil = 'data:image/jpeg;base64,' + imageData;
      this.nativeStorage.setItem("user", JSON.stringify(this.usuario));
    }, (err) => {
      alert("Erro ao gravar o arquivo:"+JSON.stringify(err));
    });
  }

}

