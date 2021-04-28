import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadLaanprodukt } from 'src/app/features/laanprodukt/+state/laanprodukt.actions';
import { LaanproduktFacade } from 'src/app/features/laanprodukt/+state/laanprodukt.facade';
import { loadBolig, setSelectedBolig } from '../../+state/bolig.actions';
import { BoligFacade } from '../../+state/bolig.facade';
import { Bolig } from '../../+state/bolig.interfaces';

@Component({
  selector: 'app-bolig-oversigt',
  templateUrl: './bolig-oversigt.component.html',
  styleUrls: ['./bolig-oversigt.component.scss'],
})
export class BoligOversigtComponent implements OnInit {
  constructor(
    private router: Router,
    public boligFacade: BoligFacade,
    public laanproduktFacade: LaanproduktFacade
  ) {}

  ngOnInit(): void {
    this.boligFacade.Dispatch(loadBolig({ userKey: 'lars' }));
    this.laanproduktFacade.Dispatch(loadLaanprodukt());
  }

  onVisBolig($event: Bolig): void {
    this.boligFacade.Dispatch(setSelectedBolig({ bolig: $event }));
    this.router.navigate(['boliger/vis']);
  }
}
