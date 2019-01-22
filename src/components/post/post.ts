import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavController } from 'ionic-angular';
import { DetPostPage } from '../../pages/det-post/det-post';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {

  

  @Input() post: any;

  constructor(public navCtrl: NavController) {
    console.log('Hello PostComponent Component');
    
  }

  goToDetPostPage(){
    this.navCtrl.push(DetPostPage, {'detPost':this.post});
  }
}
