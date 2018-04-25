import { Component, OnInit } from '@angular/core';
import {Equipement} from '../equipement'

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  equipementsPanier : Equipement[];

  equipASupprimer : Equipement;

  getEquips(): void {
  }

  constructor() { }


  onSelect(e: Equipement): void {
    this.equipASupprimer = e;
  }

  ngOnInit() {
  }

}
