import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoligFacade } from '../../+state/bolig.facade';
import { Bolig } from '../../+state/bolig.interfaces';

@Component({
  selector: 'app-bolig-vis',
  templateUrl: './bolig-vis.component.html',
  styleUrls: ['./bolig-vis.component.scss'],
})
export class BoligVisComponent implements OnInit {
  bolig$: Observable<Bolig>;

  constructor(public boligFacade: BoligFacade) {}

  ngOnInit(): void {
    this.bolig$ = this.boligFacade.BoligSelected$;
  }
}
