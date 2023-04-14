import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import { TransportDataService } from '../../services/transport-data.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private alertController: AlertController,
    private transportData: TransportDataService,
    private loadingCtrl: LoadingController
  ) { }


  postData = {
    username: '',
    password:''
  }

  id:any;
  token: any;
  idInternal:any;


  ngOnInit() {
  }

  validateInputs(){
    let username = this.postData.username.trim();
    let password = this.postData.username.trim();

    return(
      this.postData.username &&
      this.postData.password &&
      username.length > 0 &&
      password.length > 0
    );
  }

  async presentAlert(message: string){
    const alert = await this.alertController.create({
      header: '¡Alerta!',
      subHeader: 'Mensaje importante',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();    
  }

  gotoHome(){
    this.router.navigateByUrl('/home-ii');
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando Sesion...',
      duration: 3000,
    });

    loading.present();
  }


  loginAction(){
    if(this.validateInputs()){
      this.auth.auth(this.postData).subscribe(
        (res: any)=>{
          this.id = res.id;
          this.token = res.jwToken;
          this.idInternal = res.idInternal;
          localStorage.setItem('jwToken',this.token);  
          localStorage.setItem('idInternal', this.idInternal);        
          if(res.info.hasError){
            this.router.navigateByUrl('/login');
            this.presentAlert(res.info.message);
          } else{
            this.transportData.sendobjeto(this.id);
            this.router.navigateByUrl('/home-ii');
          }
        },
        (error: any) => {
          this.presentAlert('Conexion fallida, mantenimiento en el servidor');
        }
      );

      this.showLoading();
      this.postData.username='';
      this.postData.password='';
    } else{
      this.presentAlert('No se aceptan campos vacios');
    }
  }

}
