import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  id: string;
  account: any;
  bal: any;
  sequence: any;
  otbal: any;
  otcur: any;
  suben: any;
  signers: any;
  public_key: any;
  error: boolean =false;
  operations: any;
  count: number = 10;
  sbcnt: any;
  inds: any;
  loaded: any;

  constructor(private route: ActivatedRoute, private http:HttpClient,public core:CoreService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    $('title').html('Account '+this.id+' - The '+this.core.name);
    this.core.getAccount(this.id);

  }








}
