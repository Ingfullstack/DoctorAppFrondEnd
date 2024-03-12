import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  public usuarios:any;

  public title:string = 'Bienvenido a DoctorApp';
  constructor() {}

}
