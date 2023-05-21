import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    public router: Router
  ) {}

  ngOnInit() {
    
  }
  togglePassword() {
    const passwordInput = document.querySelector('ion-input[type="password"]');
    if (passwordInput) {
      const inputType = passwordInput.getAttribute('type');
      passwordInput.setAttribute('type', inputType === 'password' ? 'text' : 'password');
    }
  }
  
}
