import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TransportDataService } from 'src/app/services/transport-data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;
  userData={
    fristName: '',
    lastName: '',
    identification: '',
    email: '',
    numbercontact: '',
    adress: '',
    dateBorn: '',
    emergecyContact: ''
  };
  listUser=[];

  constructor(
    private dataTransport: TransportDataService,
    private authe: AuthService,
    private alertController: AlertController
  ) {}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: '¡Alerta!',
      subHeader: 'Mensaje Importante',
      message: message,
      buttons: ['OK'],
    });

  }

  ngOnInit() {
    this.dataTransport.$getobjeto.subscribe(id => {
      this.user = id;
      this.authe.login(this.user).subscribe(user => {
        this.userData.fristName=user.firstName;
        this.userData.lastName = user.lastName;
        this.userData.identification = user.identification;
        this.userData.email = user.email;
        this.userData.numbercontact = user.phoneNumber;
        this.userData.adress = user.address;
        this.userData.dateBorn = user.dateBorn;
        this.userData.emergecyContact = user.emergencyContact;
        console.log(user);
        if (user.info.hasError) {
          this.presentAlert(user.info.message);
        }
        
      });
    });

  }

}
