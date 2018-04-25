import { Component, OnInit } from '@angular/core'
import {Equipement} from '../equipement'
import { EquipementService } from '../equipement.service';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent implements OnInit {

  equips : Equipement[];
  selectedStuff : Equipement;

  

  constructor(private equipementService: EquipementService) { }


  getEquips(): void {
    this.equips = this.equipementService.getEquipement();
  }



  ngOnInit() {
    this.getEquips();
  }
  onSelect(e: Equipement): void {
    this.selectedStuff = e;
  }
}
