import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadLaan } from '../../+state/laan.actions';
import { LaanFacade } from '../../+state/laan.facade';
import { Laan } from '../../+state/laan.interfaces';

@Component({
  selector: 'app-laan-oversigt',
  templateUrl: './laan-oversigt.component.html',
  styleUrls: ['./laan-oversigt.component.scss'],
})
export class LaanOversigtComponent implements OnInit {
  @Input()
  boligKey: string;

  constructor(private router: Router, public laanFacade: LaanFacade) {}

  ngOnInit(): void {
    this.laanFacade.Dispatch(loadLaan({ boligKey: this.boligKey }));
  }

  onVisLaan($event: Laan): void {
    this.router.navigate(['./laan/vis'], { state: $event });
  }
}
