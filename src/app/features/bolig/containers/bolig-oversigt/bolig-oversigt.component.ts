import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadBolig } from '../../+state/bolig.actions';
import { BoligFacade } from '../../+state/bolig.facade';
import { Bolig } from '../../+state/bolig.interfaces';

@Component({
  selector: 'app-bolig-oversigt',
  templateUrl: './bolig-oversigt.component.html',
  styleUrls: ['./bolig-oversigt.component.scss'],
})
export class BoligOversigtComponent implements OnInit {
  constructor(private router: Router, public boligFacade: BoligFacade) {
      }

  ngOnInit(): void {
    this.boligFacade.Dispatch(loadBolig({ userKey: 'lars' }));
  }

  onLaanberegninger($event: Bolig): void {
    this.router.navigate(['boliger/vis'], { state: $event });
  }
}
