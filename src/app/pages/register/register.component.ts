import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    hp: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private configService: ConfigService, private router: Router) { }

  ngOnInit(): void {
  }


  onRegister() {
    this.configService.userRegister(this.profileForm).subscribe()
      console.log(this.profileForm.value)
      this.router.navigate(['login'])
    }
    // console.warn(this.profileForm.value);
  }


