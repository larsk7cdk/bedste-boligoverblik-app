import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Laanberegning } from '../../+state/laanberegning.interfaces';

@Component({
  selector: 'app-laanberegning-vis',
  templateUrl: './laanberegning-vis.component.html',
  styleUrls: ['./laanberegning-vis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaanberegningVisComponent {
  @Input()
  laanberegning: Laanberegning;
}
