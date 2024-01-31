import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router

  ) { }
  ngOnInit() { 
    if(this.authService.checkLogin()){

    }
    else{
      this.router.navigate(['/admin/sign-in']);
    }

  }
}