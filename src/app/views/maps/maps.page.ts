import { Component, ElementRef, OnInit, Renderer2, ViewChild, } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UbicationService } from '../../services/ubication.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  @ViewChild('map', { static: true }) mapElementRef!: ElementRef;
  googleMaps: any;
  center = { lat: 18.4801923, lng: -70.0169199 };
  map: any;




  constructor(private gmaps: UbicationService,
    private renderer: Renderer2,
    ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  async loadMap() {
    try {
      let googleMaps: any = await this.gmaps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      const mapEl = this.mapElementRef.nativeElement;
      const location = new googleMaps.LatLng(this.center.lat, this.center.lng);
      this.map = new googleMaps.Map(mapEl, {
        center: location,
        zoom: 7,
      });
      this.renderer.addClass(mapEl, 'visible');
      this.addMarker(location);
    } catch (e) {
      console.log(e);
    }
  }

  addMarker(location: any){
    const icon = {
      url:'../../../assets/img/location-pin.png',
      scaledSize: new this.googleMaps.Size(50, 50),
    };
    const marker = new this.googleMaps.Marker({
      position: location,
      map: this.map,
      //draggable: true,
      animation: this.googleMaps.Animation.DROP
    });
  }


 

}
