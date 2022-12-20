import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProfesor, IProfesorBean, IProfesorBeanForm } from 'src/app/model/profesor-interface';
import { CryptoService } from 'src/app/service/crypto.service';
import { ProfesorService } from 'src/app/service/profesor.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profesorBean: IProfesorBean;
  profesorBeanForm: IProfesorBeanForm;
  loginForm: FormGroup<IProfesorBeanForm>;
  lengthDni: number = 9;
  minLengthPass: number = 5;
  constructor(
    private oRouter: Router,
    private oAuth: SessionService,
    private oCryptoService: CryptoService,
    private loginFormBuilder: FormBuilder
  ) {
    this.profesorBean = {} as IProfesorBean;
    this.profesorBeanForm = {} as IProfesorBeanForm;
    this.loginForm = {} as FormGroup<IProfesorBeanForm>;
  }

  ngOnInit() {
    this.loginForm = <FormGroup>this.loginFormBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(this.lengthDni), Validators.maxLength(this.lengthDni), Validators.pattern('([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])')]],
      pass: ['', [Validators.minLength(this.minLengthPass)]]
    });
  }
  onSubmit() {
    this.profesorBean = {
      dni: this.loginForm.value.dni as string,
      pass: this.oCryptoService.getSHA256(this.loginForm.value.pass!) as string
    }
    if (this.loginForm.valid) {
      this.oAuth.login(this.profesorBean).subscribe({
        next: (data: IProfesor) => {
          localStorage.setItem('profesor', JSON.stringify(data));
          this.oRouter.navigate(['/profesor', data.id, 'view']);
        },
        error: (error: any) => {
          console.log(error);
        }
      })
    }
  }

}
