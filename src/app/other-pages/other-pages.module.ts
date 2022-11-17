import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OtherPagesRoutingModule } from './other-pages-routing.module';
import { FilmPageComponent } from './film-page/film-page.component';
import { CardscomponentsModule } from '../cardscomponents/cardscomponents.module';
@NgModule({
  declarations: [FilmPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherPagesRoutingModule,
    CardscomponentsModule
  ], exports : [FilmPageComponent]
})
export class OtherPagesModule { }
