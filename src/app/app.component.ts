import { Component } from '@angular/core';
import { CoreService } from './core.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav:boolean = true;
  text: any;

  constructor(public core:CoreService){

    // setInterval(()=>{
    //   core.getTranasctionAll();
    //   core.getLedgerAll();
    // },5000);

  }
}
