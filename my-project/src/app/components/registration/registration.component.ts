import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public name: string = '';
  public email: string = '';
  public password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public registrate(models: any[]): void {
    models.forEach((model: any) => {
      console.log(model);
    });
  }

}
