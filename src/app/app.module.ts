import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LedgerComponent } from './ledger/ledger.component';
import { AccountComponent } from './account/account.component';
import { OperationsComponent } from './operations/operations.component';
import { TransactionAllComponent } from './transaction-all/transaction-all.component';
import { LedgerAllComponent } from './ledger-all/ledger-all.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'transaction/:id',component:TransactionComponent},
  {path:'transaction-all',component:TransactionAllComponent},
  {path:'ledger-all',component:LedgerAllComponent},
  {path:'ledger/:id',component:LedgerComponent},
  {path:'account/:id',component:AccountComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionComponent,
    LedgerComponent,
    AccountComponent,
    OperationsComponent,
    TransactionAllComponent,
    LedgerAllComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    RouterModule.forRoot(appRoutes,{onSameUrlNavigation: `reload`})
  ],
  providers: [NavbarComponent],
  exports:[RouterModule,TransactionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
