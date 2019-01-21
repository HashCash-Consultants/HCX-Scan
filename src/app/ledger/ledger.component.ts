import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  id: any;
  record: any;
  sequence: any;
  operations: any;
  lid: any;
  total_coins: any;
  transactions: any;
  error: boolean;
  fee_pool: any;
  base_fee: any;
  base_reserve: any;
  protocol: any;
  max_tx: any;
  closed: any;

  constructor(private route: ActivatedRoute, private http:HttpClient,public core:CoreService, private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    $('title').html('Ledger '+this.id+' - The '+this.core.name);
    this.core.getLedger(this.id);
  }



  navLedger(id,state){
    var idx = (state=='pre')?id-1:id+1;
    this.router.navigateByUrl('/ledger/'+idx);
    this.core.getLedger(idx);
  }

}
