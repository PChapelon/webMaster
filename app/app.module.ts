import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EquipementsComponent } from './equipements/equipements.component';
import { EquipementDetailComponent } from './equipement-detail/equipement-detail.component';
import { EquipementService } from './equipement.service';
import { MagasinComponent } from './magasin/magasin.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipementsComponent,
    EquipementDetailComponent,
    MagasinComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EquipementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
