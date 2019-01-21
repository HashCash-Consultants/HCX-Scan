import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-transaction-all',
  templateUrl: './transaction-all.component.html',
  styleUrls: ['./transaction-all.component.css']
})
export class TransactionAllComponent implements OnInit {
  count: any = 10;

  constructor(public core:CoreService) { }

  ngOnInit() {
    this.core.getTranasctionAll();
  }

  showMore(){
    this.count+=10
    this.core.getTranasctionAll(this.count);
  }

}
