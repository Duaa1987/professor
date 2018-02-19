import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeworkProvider } from '../../providers/homework/homework';

/**
 * Generated class for the P3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p3',
  templateUrl: 'p3.html',
})
export class P3Page {

  public photoList = [];
  constructor(public navCtrl: NavController, public photoProvider: HomeworkProvider) {}
  //calling our list from our Database, and setting values 
  ionViewDidEnter(){
    this.photoProvider.getPhotoList().on('value', snapshot => {
      this.photoList = [];
      snapshot.forEach( snap => {
        this.photoList.push({
          id: snap.key,
          name: snap.val().name,
          picture: snap.val().picture,
        });
        console.log(this.photoList);
        return false
      });
    });
  }

  //go to the Add Photo Page
  goToAddPhoto(){
    this.navCtrl.push('AddPhotoPage');
  }
}
