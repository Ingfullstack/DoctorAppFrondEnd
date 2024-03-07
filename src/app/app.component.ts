import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public usuarios:any;

  public title:string = 'Bienvenido a DoctorApp';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5267/api/usuarios')
        .subscribe({
          next: response => this.usuarios = response,
          complete: () => console.log("Completado"),
          error: err => console.log(err)
        });
  }
}
