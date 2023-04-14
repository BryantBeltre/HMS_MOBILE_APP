import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {

  constructor(private forgetpass: AuthService, private router: Router) { }
  
  PostData= {
    mail: ''
  }
  

  ngOnInit() {
  }



  validateInputs() {
    let mail = this.PostData.mail.trim();
    return (
      this.PostData.mail &&
      mail.length > 0
    );
  }

  forgetpasswodAction() {
    if (this.validateInputs()) {
      this.forgetpass.forgetpassword(this.PostData.mail).subscribe(
        (res: any) => {
          console.log(res);
          if(res.info.hasError){
            console.log(res.info.message);
          }
          this.router.navigateByUrl('/requestresetpass');
        });

        this.router.navigateByUrl('/requestresetpass');

      
    }
    else{
      console.log('campos vacios');
    }

  }

}
