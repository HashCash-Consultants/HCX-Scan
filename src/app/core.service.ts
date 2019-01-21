import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  // link:any = 'https://billbitcoin.com/';
  link:any = 'https://bitpaymentz.com/';
  name:any;
  navbar:any;
  records: any;
  ledgers: any;
  currency: any;
  operations:any=null;
  record: any;
  rid: any;
  source_account_sequence: any;
  ledger: any;
  fee_paid: any;
  created_at: any;
  sign: any;
  opert: any;
  memo: any;
  error: boolean = false;
  sequence: any;
  lid: any;
  total_coins: any;
  fee_pool: any;
  base_fee: any;
  base_reserve: any;
  protocol: any;
  max_tx: any;
  closed: any;
  transactions: any;
  account: any;
  bal: any;
  otbal: any;
  otcur: any;
  suben: any;
  signers: any;
  sbcnt: any;
  inds: any;
  theme: any;
  id: any;
  aid: any;
  count: number = 10;
  loaded: boolean;
  offer: string = '';
  result: string;

  constructor(private http:HttpClient) {
    this.http.get<any>('./assets/data/details.json').subscribe(data=>{
      this.name = data.name;
      this.navbar = data.navbar;
      this.theme = data.theme;
      this.currency = data.currency;
      $('title').html(this.name);
    })

   }

   removeUs(string){
    return string.replace('_',' ');
  }


  secAgo(datetime){
    var d1:any = new Date();
    var d2:any = new Date(datetime);
    var diff:any = d1-d2
    if(diff<60000){
      return Math.floor(diff/1000)+' seconds ago';
    }
    else if(diff>60000&&diff<60000*60){
      return Math.floor(diff/60000)+' minutes ago';
    }
    else if(diff>60000*60&&diff<60000*60*24){
      return Math.floor(diff/3600000)+' hours ago';
    }
    else if(diff>60000*60*24){
      return Math.floor(diff/86400000)+' days ago';
    }
  }

  getTranasctionAll(limit:any=10){
    this.http.get<any>(this.link+'transactions?order=desc&limit='+limit)
    .subscribe(response=>{
      var re = response._embedded.records;
      this.records = re;
    })
  }

  getLedgerAll(limit:any=10){
    this.http.get<any>(this.link+'ledgers?order=desc&limit='+limit)
    .subscribe(response=>{
      var re = response._embedded.records;
      this.ledgers = re;
    })
  }

  getCheckCurr(cr){
    if(cr){
    if(cr.length<=6)
    return cr.substring(0,3);
    else if(cr.length>=7)
    return cr.substring(0,4);
    }
  }

  getStat(obj){
    var text;
    if(obj.type=='manage_offer'){
      text='Offer ';
    if(obj.offer_id==0&&obj.amount>0){
      this.offer = 'create';
      text+='Created: Sell '+obj.amount+' '+this.getCheckCurr(obj.selling_asset_code)+', Buy '+this.getCheckCurr(obj.buying_asset_code)+' at '+obj.price+' '+this.getCheckCurr(obj.buying_asset_code)+'/'+this.getCheckCurr(obj.selling_asset_code);
    }
      if(obj.offer_id>0&&obj.amount==0){
      this.offer = 'remove';
      text+='Removed: Buy '+this.getCheckCurr(obj.buying_asset_code)+' at '+obj.price+' '+this.getCheckCurr(obj.buying_asset_code)+'/'+this.getCheckCurr(obj.selling_asset_code);
    }
    if(obj.offer_id>0&&obj.amount>0){
      this.offer = 'update';
      text+='Updated: Sell '+obj.amount+' '+this.getCheckCurr(obj.selling_asset_code)+', Buy '+this.getCheckCurr(obj.buying_asset_code)+' at '+obj.price+' '+this.getCheckCurr(obj.buying_asset_code)+'/'+this.getCheckCurr(obj.selling_asset_code);
    }
  }
    else if(obj.type=='change_trust'){
      text='Change Trust Line: '+obj.limit+' '+obj.asset_code;
    }
    else if(obj.type=='payment'){
      if(obj.from==this.id)
      text = 'Sent ';
      else if(obj.to==this.id)
      text = 'Recieved ';
      else
      text = '';
      text+='Payment of '+obj.amount+' '+this.currency;
    }
    else if(obj.type=='create_account'){
      text='Started Balance with '+obj.starting_balance+' '+this.currency;
    }
    else if(obj.type=='set_options'){
      text='Set Account Options';
    }


    return text;
  }

  calcFee(fee){
    var val = fee/100;
    val = 0.00001*val;
    return val+' '+this.currency;
  }

  getTranasction(id):any{
    this.record = false;
    this.id = id;
    this.result='transaction';
     this.http.get<any>(this.link+'transactions/'+id)
     .subscribe(response=>{
       this.record = response;
       this.rid = this.record.source_account;
       this.source_account_sequence = this.record.source_account_sequence;
       this.ledger = this.record.ledger;
       this.fee_paid = this.record.fee_paid;
       this.created_at = this.record.created_at;
       this.sign = this.record.signatures;
       this.opert = this.record.operation_count;
       this.memo = this.record.memo_type;

       this.http.get<any>(this.link+'transactions/'+id+'/operations')
       .subscribe(data=>{
         this.operations = data._embedded.records;

       })


     },error=>{
       this.error = true;
     })
   }

   getLedger(id){
    this.id = id;
     this.record = false;
    this.http.get<any>(this.link+'ledgers/'+id)
    .subscribe(response=>{
      this.record = response;
      this.sequence = this.record.sequence;
      this.lid = this.record.id;
      this.total_coins = this.record.total_coins;
      this.fee_pool = this.record.fee_pool;
      this.base_fee = this.record.base_fee_in_stroops;
      this.base_reserve = this.record.base_reserve_in_stroops;
      this.protocol = this.record.protocol_version;
      this.max_tx = this.record.max_tx_set_size;
      this.closed = this.record.closed_at;


      this.http.get<any>(this.link+'ledgers/'+id+'/transactions')
      .subscribe(data=>{
        this.transactions = data._embedded.records;
      })

      this.http.get<any>(this.link+'ledgers/'+id+'/operations')
      .subscribe(data=>{
        this.operations = data._embedded.records;
      })

    },error=>{
      this.error = true;
    })
  }

  getAccount(id){
    this.id = id;
    this.operations = false;
    this.account = false;
    this.result='account';
    this.http.get<any>(this.link+'accounts/'+id)
    .subscribe(response=>{
      this.account = response;
      this.aid = this.account.id;
      this.bal = this.account.balances
      this.sequence = this.account.sequence;
      this.suben = this.account.subentry_count;
      this.signers = this.account.signers;
      this.sbcnt = this.account.subentry_count;
      this.inds = this.account.inflation_destination;

      this.http.get<any>(this.link+'accounts/'+id+'/operations?order=desc')
      .subscribe(data=>{
        this.operations = data._embedded.records;
      })
    },error=>{
      this.error = true;
    })
  }

  showMore(){
    this.loaded = true;
    this.count+=10;
    this.http.get<any>(this.link+'accounts/'+this.id+'/operations?order=desc&limit='+this.count)
    .subscribe(data=>{
      this.operations = data._embedded.records;
      this.loaded = false;
    })
  }


}
