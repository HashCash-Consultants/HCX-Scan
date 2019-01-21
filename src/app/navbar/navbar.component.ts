import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  text: any;
  nav: any;

  constructor(
    public core:CoreService,
    private route:Router) { }

  ngOnInit() {
    this.core.records = null;


  }


  search(){
    if(this.text.length<=7){
     this.route.navigate(['/ledger/'+this.text]);
     this.core.getLedger(this.text);
    }
    else{
      if(this.text[0]=='G'){
      this.route.navigate(['/account/'+this.text]);
      this.core.getAccount(this.text);
      }
      else{
      this.route.navigate(['/transaction/'+this.text]);
      this.core.getTranasction(this.text);
      }
    }
    this.text=null;
  }
}
