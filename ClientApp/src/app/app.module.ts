
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';







import 'hammerjs';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { CounterComponent } from './components/counter/counter.component';



import { EmployeeService } from './components/employees/empservice.service';
import { createemployee } from './components/employees/AddEmployee.component';
import {editemployee } from './components/employees/EditEmployee.component';
import { FetchEmployeeComponent } from './components/employees/fetchemployee.component';


import { UImaterialmodule } from './components/shared/material/uimaterial.module';
import { ProfileComponent } from './components/gitprofile/profile.component';
import { GitProfileService } from './components/gitprofile/gitprofile.service';
import { CommingComponent } from './components/comming/comming.component';


import { AccountSummaryComponent } from './components/account/account-summary/account-summary.component';
import { AccountListComponent } from "./components/account/account-list/account-list.component";
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { AccountActivityComponent } from './components/account/acccount-activity/account-activity.component';
import { AccountService } from './components/account/shared/account.service';
import { HeaderComponent } from './components/account/shared/header/header.component';
import { FormatAccountNumberPipe } from './components/account/shared/format-account-number.pipe';
import { I18nComponent } from './components/i18n/i18n.component';

//import {UdoComponent } from './components/udo/udo.component';
//import {UdoService } from './components/udo/udo.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,editemployee,
    createemployee, FetchEmployeeComponent, ProfileComponent, CommingComponent,
//  UdoComponent, 


    /*      */
    AccountActivityComponent,
    AccountDetailComponent,
    AccountListComponent,
    AccountSummaryComponent,
    HeaderComponent,
    FormatAccountNumberPipe,
    I18nComponent


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, UImaterialmodule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetch-employee', component: FetchEmployeeComponent },
      { path: 'register-employee', component: createemployee },
      { path: 'employee/edit/:id', component: editemployee },
      { path: 'git', component: ProfileComponent },

    { path: 'account', component: AccountListComponent },
      { path: 'detail/:id', component: AccountDetailComponent },
    //{ path: 'account/currencies', component: UdoComponent }
    ])  
  ],
  
  providers: [EmployeeService,
    GitProfileService,
    AccountService
    // ,UdoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
