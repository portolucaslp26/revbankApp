import { TitularesComponent } from "./titulares.component";
import { AngularMaterialModule } from "../angular-material.module";
import { TitularesRoutingModule } from "./titulares-routing.module";
import { NgModule } from "@angular/core";
import { DialogComponent } from "../shared/dialog/dialog.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TitularesComponent,
    DialogComponent
    ],
  imports: [
    CommonModule,
    TitularesRoutingModule,
    AngularMaterialModule,
  ],
  providers: [
    Location
  ]
})
export class TitularesModule { }
