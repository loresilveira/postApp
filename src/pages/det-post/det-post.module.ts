import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetPostPage } from './det-post';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    DetPostPage
  
  ],
  imports: [
    IonicPageModule.forChild(DetPostPage),
    ComponentsModule
  ],
})
export class DetPostPageModule {}
