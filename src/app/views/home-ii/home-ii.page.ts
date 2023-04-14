import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home-ii',
  templateUrl: './home-ii.page.html',
  styleUrls: ['./home-ii.page.scss'],
})
export class HomeIIPage implements OnInit {

  constructor(private router: Router,
    public popoverController: PopoverController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  async cerrarPopover() {
    await this.popoverController.dismiss();
  }

  singout(){
    this.router.navigateByUrl('/login');
    this.cerrarPopover();
  }

  profile(){
    this.router.navigateByUrl('/home');    
    this.cerrarPopover();
    this.showLoading();

  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando Datos...',
      duration: 3000,
    });

    loading.present();
  }
}
