import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AppService {
  STATES: string[] = [
    "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
    "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
    "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
    "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo",
    "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
    "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
    "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
    "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"
  ];

  constructor() { }

  getStates (): Observable<string[]> {
    console.log('Here', this.STATES);
    return of(this.STATES);
  }
}
