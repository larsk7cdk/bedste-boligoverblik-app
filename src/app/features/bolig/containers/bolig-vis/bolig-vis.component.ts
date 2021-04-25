import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoligFacade } from '../../+state/bolig.facade';
import { Bolig } from '../../+state/bolig.interfaces';

@Component({
  selector: 'app-bolig-vis',
  templateUrl: './bolig-vis.component.html',
  styleUrls: ['./bolig-vis.component.scss'],
})
export class BoligVisComponent implements OnInit {
  bolig: Bolig;

  constructor(private router: Router, public boligFacade: BoligFacade) {
    this.bolig = this.router.getCurrentNavigation().extras.state as Bolig;
  }

  ngOnInit(): void {}
}
