import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor(public core:CoreService) { }

  ngOnInit() {
  }

  open(id){
    $('#crd'+id).toggle();
    $('i.fax').toggleClass('fa-angle-up').toggleClass('fa-angle-down');
  }
}
