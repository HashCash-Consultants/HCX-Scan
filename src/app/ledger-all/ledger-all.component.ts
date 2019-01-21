import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-ledger-all',
  templateUrl: './ledger-all.component.html',
  styleUrls: ['./ledger-all.component.css']
})
export class LedgerAllComponent implements OnInit {
  count: number = 10;

  constructor(public core:CoreService) { }

  ngOnInit() {
    this.core.getLedgerAll()
  }


  showMore(){
    this.count+=10
    this.core.getLedgerAll(this.count);
  }

}
