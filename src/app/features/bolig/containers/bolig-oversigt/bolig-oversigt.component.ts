import { Component, OnInit } from '@angular/core';
import { loadBolig } from '../../+state/bolig.actions';
import { BoligFacade } from '../../+state/bolig.facade';

@Component({
  selector: 'app-bolig-oversigt',
  templateUrl: './bolig-oversigt.component.html',
  styleUrls: ['./bolig-oversigt.component.scss'],
})
export class BoligOversigtComponent implements OnInit {
  constructor(public boligFacade: BoligFacade) {}

  ngOnInit(): void {
    this.boligFacade.Dispatch(loadBolig({ userKey: 'Lars' }));
  }
}
