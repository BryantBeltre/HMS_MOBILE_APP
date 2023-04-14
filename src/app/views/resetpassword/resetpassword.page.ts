import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  constructor( private reset: AuthService,private navCtrl: NavController, private activatedRoute: ActivatedRoute) { }
  postData={
    email: '',
    token: '',
    password: '',
    confirmpassword:''
  }


  ngOnInit() {
    this.postData.token = this.activatedRoute.snapshot.paramMap.get('token') ?? "";
    console.log(this.postData.token);        
  }
  validateInputs(){
    let username = this.postData.email.trim();
    let password = this.postData.password.trim();
    let confirmpassword = this.postData.confirmpassword.trim();

    return(
      this.postData.email &&
      this.postData.password &&
      this.postData.confirmpassword &&
      username.length > 0 &&
      password.length > 0 &&
      confirmpassword.length > 0
    );
  }

  resetPassword(){ 

    if(this.validateInputs()){
      this.reset.resetpassword(this.postData).subscribe(
        (res: any)=>{
          console.log(res);


        },
        (error: any) => {
          console.log('Conexion fallida, mantenimiento en el servidor');
        }
      );
    } else{
      console.log('No se aceptan campos vacios');
    }

  }
  

}
