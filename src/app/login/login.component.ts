import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router: Router, private hardCodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}


// conditional operators

