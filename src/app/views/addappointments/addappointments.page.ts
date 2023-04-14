import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addappointments',
  templateUrl: './addappointments.page.html',
  styleUrls: ['./addappointments.page.scss'],
})
export class AddappointmentsPage implements OnInit {

  idstorage= localStorage.getItem('idInternal');
  postCita ={
    patient_id: 0,
    date: '',
    dateEnd: '2023-04-15T20:17:00-04:00',
    IdStatusAppointment: 2,
    reason: '',
    doctor_id: 0,
  }

  dataDoctor: any;
  dataEspecialidad: any;
  
  //this.postCita.dateEnd.setMinutes(this.postCita.dateEnd.getMinutes() + 59);

  private refreshed = false;
  constructor(private save: AuthService,private alertController: AlertController
    ,private router: Router) { }

  async presentAlert( mensaje: string, subh:string) {
    const alert = await this.alertController.create({
      header: 'Estado de la cita',
      subHeader: subh,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }


  ngOnInit() {
    this.save.getSpeciality().subscribe((res: any)=>{
      this.dataEspecialidad = res;
      this.dataDoctor = res[0].doctor;
      console.log(this.dataDoctor);
    });
    
  }



  changeevent(id: any){
 /*    let fechaplus: Date = new Date(); 
    fechaplus = this.postCita.date;    
    fechaplus.setHours(fechaplus.getHours() + 1); */
    const idSeleccionado = parseInt(id.target.value);
    console.log(idSeleccionado);
    this.dataDoctor = this.dataEspecialidad.find((x: any) => x.id == idSeleccionado).doctor;

  }

  guardar(){    
    this.postCita.patient_id = this.idstorage ? parseInt(this.idstorage, 10) : 0;
    this.save.addAppoiments(this.postCita).subscribe((res: any)=>{
      var estado = 'Satifactoriamente'        
      var mensaje = 'Cita agendada'
      this.presentAlert(mensaje, estado);
      this.router.navigateByUrl('/home-ii');               
      }, 
      (error: HttpErrorResponse) => {
        var estado = 'Conflicto al agendar cita'        
        this.presentAlert(error.error, estado); 
      }      
    );      
            
    console.log(this.postCita);
  }

  volver(){
    this.router.navigateByUrl('/appointments');
  }

}
