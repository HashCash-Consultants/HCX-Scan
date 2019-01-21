import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreService } from '../core.service';
import * as $ from 'jquery';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  records: any;
  ledgers: any;
  source: EventSource;
  counter:any;
  int: any;

  constructor(private http:HttpClient, public core:CoreService) { }

  ngOnInit() {
    this.core.getTranasctionAll();
    this.core.getLedgerAll();
    $(function(){
      $('.fs').css('background','red');
    })
  }



}
