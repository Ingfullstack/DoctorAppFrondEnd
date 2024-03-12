import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../services/compartido.service';
import { Sesion } from '../../../usuario/interfaces/sesion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  public username: string = '';

  constructor(private compartidoService: CompartidoService, 
    private _router: Router){}

  ngOnInit(): void {
    const usuarioToken = this.compartidoService.obtenerSesion();
    if (usuarioToken != null) {
      this.username = usuarioToken.username;
    }
  }

  public cerrarSesion(){
    this.compartidoService.eliminarSesion();
    this._router.navigate(['login'])
    
  }


}
