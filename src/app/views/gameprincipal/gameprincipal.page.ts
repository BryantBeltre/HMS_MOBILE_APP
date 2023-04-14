import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gameprincipal',
  templateUrl: './gameprincipal.page.html',
  styleUrls: ['./gameprincipal.page.scss'],
})
export class GameprincipalPage implements OnInit {

  constructor(
    public router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  start() {
    this.router.navigate(["/game"]);
  }

  continue() {
    this.router.navigate(["/game"]);

  }

  reset(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "¿Deseas comezar desde 0?",
      message: "Todo tu progreso y avances se perderan",
      buttons: [{
        text: "SI",
        handler: () => {
          localStorage.setItem("questionNumber", "0");
          this.router.navigate(["/game"]);
        }
      },
      {
      text: "NO",
      handler: () =>{
        this.router.navigate(["/game"]);
      }
      }
      ]
    });
    await alert.present();
  }

}
