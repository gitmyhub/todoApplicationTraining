import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'ShikshaAndMarie';
  password = 'easyPassword';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === 'ShikshaAndMarie' && this.password === 'easyPassword') {

      this.router.navigate(['welcome', this.username]);

      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}


// conditional operators

