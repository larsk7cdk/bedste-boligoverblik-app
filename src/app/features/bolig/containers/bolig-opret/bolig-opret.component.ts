import { Component, OnInit } from '@angular/core';
import { loadBolig } from '../../+state/bolig.actions';
import { BoligFacade } from '../../+state/bolig.facade';

@Component({
  selector: 'app-bolig-opret',
  templateUrl: './bolig-opret.component.html',
  styleUrls: ['./bolig-opret.component.scss'],
})
export class BoligOpretComponent implements OnInit {
  constructor(public boligFacade: BoligFacade) {}

  ngOnInit(): void {}

  onCreate(): void {
    // this.boligFacade.Dispatch()
  }
}
