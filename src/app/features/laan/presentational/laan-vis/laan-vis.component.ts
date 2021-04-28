import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laan } from '../../+state/laan.interfaces';

@Component({
  selector: 'app-laan-vis',
  templateUrl: './laan-vis.component.html',
  styleUrls: ['./laan-vis.component.scss'],
})
export class LaanVisComponent {
  @Input()
  laan: Laan;

  constructor(private router: Router) {
    this.laan = this.router.getCurrentNavigation().extras.state as Laan;
  }
}
