import { Component, Input, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { loadLaan } from '../../+state/laan.actions';
import { LaanFacade } from '../../+state/laan.facade';

@Component({
  selector: 'app-laan-oversigt',
  templateUrl: './laan-oversigt.component.html',
  styleUrls: ['./laan-oversigt.component.scss'],
})
export class LaanOversigtComponent implements OnInit {
  @Input()
  boligKey: string;

  constructor(public laanFacade: LaanFacade) {}

  ngOnInit(): void {
    this.laanFacade.Dispatch(loadLaan({ boligKey: this.boligKey }));
  }
}
