import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TitularFormComponent } from './titular-form/titular-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitularEditComponent } from './titular-edit/titular-edit.component';
import { TrasferenciaComponent } from './trasferencia/trasferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};
@NgModule({
  declarations: [
    AppComponent,
      TitularFormComponent,
      TitularEditComponent,
      TrasferenciaComponent,
      ExtratoComponent,
   ],
  imports: [
    HttpClientModule ,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
