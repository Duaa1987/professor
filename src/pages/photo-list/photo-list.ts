import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HomeworkProvider } from '../../providers/homework/homework';
import { EmailComposer } from '@ionic-native/email-composer';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the PhotoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo-list',
  templateUrl: 'photo-list.html',
})
export class PhotoListPage {
  galleryType = 'regular';
  public photoList = [];
  currentImage = null;

  constructor(private camera: Camera, private emailComposer: EmailComposer,    private alertCtrl: AlertController,  public navCtrl: NavController, public navParams: NavParams , public photoProvider: HomeworkProvider) {
  }

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

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: "Sure you want to delete this photo? There is NO undo!",
      message: "",
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Agree clicked");
            this.photoList.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }


  captureImage() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
    }
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = imageData;
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
 
  sendEmail() {
    let email = {
      to: 'duaa.alwad@gmail.com',
      cc: 'duaa.taani@yahoo.com',
      attachments: [
        this.currentImage
      ],
      subject: 'Homework',
      body: 'Hey , this is the hw',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }
 
}

