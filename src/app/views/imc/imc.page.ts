import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class IMCPage implements OnInit {

  edad: number=0;
  peso: number=0;
  pies: number=0;
  imc: number=0;

  imcText: String='';

  constructor(private alertController: AlertController) { }



  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Error al suministrar datos',
      message: 'Nigunos de estos campo pude ser 0',
      buttons: ['OK'],
    });

    await alert.present();
  }


  //Claculamos el imc
  calcularimc() {
    if (this.edad > 0 && this.peso > 0 && this.pies > 0) {
      //Convertir peso de lib a kg 
      var pesokg = this.peso * 0.453592;
      //Converti altura de pies a metros
      var alturaMt = this.pies * 0.3048;

      this.imc = pesokg / (alturaMt * alturaMt);
      console.log(this.imc);
      this.obtenerEstado(this.imc);
    } else {
      this.presentAlert();
    }
  }
  obtenerEstado(imc: number) {
    if (imc < 18.5) {
      this.imcText = '¡Bajo peso!';
    }
    else if (imc < 25) {
      this.imcText = 'Saludable'            
    }
    else if(imc < 30){
      this.imcText = 'Sobrepeso';
    }
    else if(imc < 35){
      this.imcText = 'Obesidad';
    }
    else{
      this.imcText = 'Obesidad Grado 2 o Mayor';
    }

  }

}
