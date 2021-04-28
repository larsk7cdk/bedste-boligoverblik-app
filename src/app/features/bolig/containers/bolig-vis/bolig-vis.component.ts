import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { loadLaan } from 'src/app/features/laan/+state/laan.actions';
import { LaanFacade } from 'src/app/features/laan/+state/laan.facade';
import { BoligFacade } from '../../+state/bolig.facade';
import { Bolig } from '../../+state/bolig.interfaces';

@Component({
  selector: 'app-bolig-vis',
  templateUrl: './bolig-vis.component.html',
  styleUrls: ['./bolig-vis.component.scss'],
})
export class BoligVisComponent implements OnInit {
  bolig$: Observable<Bolig>;

  constructor(public boligFacade: BoligFacade, private laanFacade: LaanFacade) {
    // this.bolig = this.router.getCurrentNavigation().extras.state as Bolig;
  }

  ngOnInit(): void {
    this.bolig$ = this.boligFacade.BoligSelected$;
  }
}
