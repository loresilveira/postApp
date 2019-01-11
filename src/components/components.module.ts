import { NgModule } from '@angular/core';
import { PostComponent } from './post/post';

import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [PostComponent],
	imports: [IonicModule],
	exports: [PostComponent]
	
})
export class ComponentsModule {}
