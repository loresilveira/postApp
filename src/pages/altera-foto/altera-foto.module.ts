import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlteraFotoPage } from './altera-foto';
import { Camera } from '@ionic-native/camera';

@NgModule({
  
  declarations: [
    AlteraFotoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlteraFotoPage),
  ],
})
export class AlteraFotoPageModule {}
