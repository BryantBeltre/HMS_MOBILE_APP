import { Component, OnInit } from '@angular/core';
import {TransportDataService} from '../../services/transport-data.service';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.page.html',
  styleUrls: ['./detalles-cita.page.scss'],
})
export class DetallesCitaPage implements OnInit {

  constructor(private getData:TransportDataService) { }

  doctorName = '';
  doctorApellido = ''
  fecha= '';
  description='';

  

  ngOnInit() {
    this.getData.$getobjeto2.subscribe((data:any) => {      
      this.doctorName = data.doctor.firstName;
      this.doctorApellido = data.doctor.lastName;
      this.description = data.reason;
      this.fecha = data.date;
      console.log(data);
    });
    

  }

}
