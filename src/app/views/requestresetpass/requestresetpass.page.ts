import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestresetpass',
  templateUrl: './requestresetpass.page.html',
  styleUrls: ['./requestresetpass.page.scss'],
})
export class RequestresetpassPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigateByUrl('/login');
  }



}
