import { Injectable } from '@angular/core';
import { Equipement } from './equipement';
import { STUFF } from './mock-stuf';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EquipementService {

  getEquipement():Equipement[] {
    return STUFF;
  }
  
  constructor() { }

}
