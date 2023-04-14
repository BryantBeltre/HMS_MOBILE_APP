import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import {TransportDataService} from '../../services/transport-data.service'

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  constructor(private getcitas: AuthService, private router: Router,private alertController: AlertController
    ,private loadingCtrl:LoadingController, private sendData: TransportDataService) { }

  citas: any;
  citasDoctor: any;
  btnNoAdd = false;
  ruta = '';
  pendiente = false;
  Mystatus: string = 'Cargando...';

  ejecutar = false;

  ngOnInit() {
    this.getcitas.getcita().subscribe((data: any) => {
      this.citas = data;
      if (this.citas.idStatusAppointment === 1) {
        this.pendiente = true;
      }
      if (this.citas.IdStatusAppointment === 2) {
        this.pendiente = false;
      }
      if (this.citas.length >= 8) {
        this.btnNoAdd = true;

      } else {
        this.btnNoAdd = false;
      }
      console.log(this.citas);
    });

  }


/*   refreshPage() {
    var miContenido = document.getElementById('micontenido');
    setTimeout(() => {
      location.reload();
    }, 200);
  } */

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando Datos...',
      duration: 2000,
    });

    loading.present();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Mensaje de segurida',
      subHeader: 'por motivos de seguridad',
      message: 'El pasiente no puede tener mas de 8 registro!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlert2(id: any) {
    const alert = await this.alertController.create({
      header: "¿Deseas eliminar esta cita",
      message: "La eliminacion es de forma permanente",
      buttons: [{
        text: "SI",
        handler: () => {

          this.deletecita8(id);
          this.router.navigateByUrl('/home-ii');
          this.showLoading();

        }
      },
      {
        text: "NO",
        handler: () => {

        }
      }
      ]
    });
    await alert.present();
  }


  redirectio() {
    if (this.btnNoAdd) {
      this.presentAlert();
    }

    if (!this.btnNoAdd) {
      this.router.navigateByUrl('/home-ii');

    }
  }

  deletecita8(id: any) {
    this.getcitas.deleteappointment(id).subscribe();
  }

  doRefresh(event: any) {
    console.log('Comenzando refresco');

    // Agrega aquí el código para actualizar la página

    setTimeout(() => {
      console.log('Refresco completado');
      event.target.complete();
    }, 2000);
  }

  abrirP(id:any){
      for(let i of this.citas){
        if (i.id == id) {
          this.sendData.sendobjeto2(i);
          this.showLoading();
        }
      }


    this.router.navigateByUrl('/detalles-cita');

  }


  

}
