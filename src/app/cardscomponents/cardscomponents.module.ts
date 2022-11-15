import { PublicardComponent } from './publicard/publicard.component';
import { CompanylogoComponent } from './companylogo/companylogo.component';
import { CoversFSComponent } from './covers-fs/covers-fs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ PublicardComponent, CompanylogoComponent, CoversFSComponent ],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [PublicardComponent, CompanylogoComponent, CoversFSComponent]
})
export class CardscomponentsModule { }
