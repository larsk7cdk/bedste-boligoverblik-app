import { Component, OnInit } from '@angular/core';
import { loadBolig, saveBolig } from '../../+state/bolig.actions';
import { BoligFacade } from '../../+state/bolig.facade';
import { BoligOpret } from '../../+state/bolig.interfaces';

@Component({
  selector: 'app-bolig-opret',
  templateUrl: './bolig-opret.component.html',
  styleUrls: ['./bolig-opret.component.scss'],
})
export class BoligOpretComponent implements OnInit {
  constructor(public boligFacade: BoligFacade) {}

  ngOnInit(): void {}

  onSave(): void {
    const request: BoligOpret = {
      userKey: 'Lars',
      adresse: 'xxx',
      x: 1,
      y: 2,
    };

    this.boligFacade.Dispatch(saveBolig({ request }));
  }
}
