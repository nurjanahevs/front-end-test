import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private configService: ConfigService, private router: Router) { }

  ngOnInit(): void {
  }


  onLogin(){
    this.configService.userLogin(this.loginForm)
    .subscribe(
      res =>{
      console.log(res)
      localStorage.setItem('token', res.access_token)
      window.alert('succes login')
      this.router.navigate([''])
    },
    )
  }
    // console.warn(this.profileForm.value);
  }

