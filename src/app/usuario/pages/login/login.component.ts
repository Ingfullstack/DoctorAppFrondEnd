import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompartidoService } from '../../../compartido/services/compartido.service';
import { Login } from '../../interfaces/login';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public ocultarPassword: boolean = true;
  public mostrarLoading: boolean = false;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private usuarioServices: UsuarioService,
    private compartidoServices: CompartidoService
    ){}

  public formLogin: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  public iniciarSesion(){
    this.mostrarLoading = true;

    const request: Login = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password
    }

    this.usuarioServices.iniciarSesion(request).subscribe({
      next: (response) => {
        this.compartidoServices.guardarSesion(response),
        this.router.navigate(['layout']);
      },
      error: (error) => {
        this.compartidoServices.mostrarAlerta(error.error, 'Error!');
        this.mostrarLoading = false;
      },
      complete: () => {
        this.mostrarLoading = false;
      }
    });
  }
}
