import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
import { Storage } from '@ionic/storage-angular';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private alertController: AlertController, private modalController: ModalController, private storage: Storage) {
    this.presentSplash();

  }

  async about() {
    const alert = await this.alertController.create({
      header: 'Need help?',
      subHeader: 'You can messsage us on \n nightdev@gmail.com \n 0912345689 '   ,
      
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentSplash(){
    const page = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'modal-fullscreen'
    });
    
    return await page.present();
 
 
   }

  async developers() {
    const alert = await this.alertController.create({
      header: 'Developers of the Application: ',
      message: `
      <ul>
        <li> Carillo, Maria Elisa R.</li>
        <li>Empaz, Sodina Angela P.</li>
        <li>Javines, Jasmine A.</li>
        <li>Naval.Jr., Dominator S.A</li>
        <li>Paulme, Miguel Angelo S.</li>
        <li>Solar, Cherrybel S.</li>
      </ul>
    `,
      
      
      buttons: ['OK'],
    });

    

    await alert.present();
  }

  async ngOnInit() {

    await this.storage.create();
  }

  
}

