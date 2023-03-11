import { Component, OnInit } from '@angular/core';
import { AuthService } from './authorization/services/auth.service';

/** @title drawer with custom escape and backdrop click behavior */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.autoLogin();
  }
}
