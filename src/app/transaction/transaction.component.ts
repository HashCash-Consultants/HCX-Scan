import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { CoreService } from '../core.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  id: string;
  records: any;
  sign: any;
  record: any;
  rid: any;
  source_account_sequence: any;
  ledger: any;
  fee_paid: any;
  created_at: any;
  operations: any;
  opert: any;
  error: boolean;
  memo: any;

  constructor(private route: ActivatedRoute, private http:HttpClient,public core:CoreService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    $('title').html('Transaction '+this.id+' - The '+this.core.name);
    this.core.getTranasction(this.id);
  }





}
