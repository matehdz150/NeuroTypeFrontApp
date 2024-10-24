import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{

  form: FormGroup;

  constructor(formBuilder : FormBuilder, private loginService:LoginService){
    this.form = formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
      this.loginService.userLoged$.subscribe((isLogged)=>{
        if(isLogged){
          console.log('usuario logeado')
        }
      })
  }

  login(){
    if(this.form.valid){
      console.log(this.form.getRawValue())
      this.loginService.login(this.form.getRawValue())
    }else{
      console.log('formulario no valido')
    }
  }


}
