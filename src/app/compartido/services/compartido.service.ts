import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../../usuario/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  constructor(private _snackBar: MatSnackBar) { }

  public mostrarAlerta(mensaje: string, tipo: string){
    this._snackBar.open(mensaje,tipo,{
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 3000
    });
  }

  //Guardar Sesion
  public guardarSesion(sesion: Sesion){
    localStorage.setItem("usuarioSesion", JSON.stringify(sesion));
  }

  //Obtener Sesion
  public obtenerSesion(){
    var sesionString = localStorage.getItem("usuarioSesion");
    const usuarioToken = JSON.parse(sesionString!);
    return usuarioToken;
  }

  public eliminarSesion(){
    localStorage.removeItem("usuarioSesion");
  }
}
