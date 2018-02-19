import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeworkProvider } from '../../providers/homework/homework';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the P2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p2',
  templateUrl: 'p2.html',
})
export class P2Page {
  Picture;
  base64Image;
  constructor(public cameraPlugin: Camera, public navCtrl: NavController,
    public photoProvider: HomeworkProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P2Page');
  }


  createPost(photoName: string, Picture: string){
    this.photoProvider.createPost(photoName, this.Picture);
  }

  takePicture(){
    this.cameraPlugin.getPicture({
      quality : 95,
      destinationType : this.cameraPlugin.DestinationType.DATA_URL,
      sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: this.cameraPlugin.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    }).then(imageData => {
       // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      //this.Picture is passing the string to our DB
      this.Picture = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

}
