import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";
  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private classToggler: ClassToggleService,
    public authService: AuthService,
    private router: Router
  ) {
    
    super();
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if(this.authService.checkLogin()){
    }
    else{
      this.router.navigate(['/admin/sign-in']);
    }
  }

  ngOnInit() {
    
  }
}
