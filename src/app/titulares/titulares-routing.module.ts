import { Component, NgModule } from '@angular/core';
import { TitularesComponent } from './titulares.component';
import { RouterModule, Routes } from '@angular/router';
import { TitularFormComponent } from '../titular-form/titular-form.component';
import { TitularEditComponent } from '../titular-edit/titular-edit.component';
import { TrasferenciaComponent } from '../trasferencia/trasferencia.component';
import { ExtratoComponent } from '../extrato/extrato.component';
const routes: Routes = [
  {
    path: 'titulares',
    component: TitularesComponent
  },
  {
    path: 'titulares/new',
    component: TitularFormComponent
  },
  {
    path: 'titulares/edit/:id',
    component: TitularEditComponent
  },
  {
    path: 'titulares/transferencia',
    component: TrasferenciaComponent
  },
  {
    path: 'titulares/extrato',
    component: ExtratoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitularesRoutingModule { }
