import { TempProvider } from './../provider/temp';
import { Temp } from './../model/temp.model';
import { Component } from '@angular/core';
import{ Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items = ['mango','banana','orange'];
  public temp$: Observable<Temp>;
  constructor(private tempProvider: TempProvider) {}

  getTemp() {
    this.temp$ = this.tempProvider.getTemp();
    console.log('Get Temp');
  } 

}
