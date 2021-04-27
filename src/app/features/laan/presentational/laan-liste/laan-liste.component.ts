import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { Laan } from '../../+state/laan.interfaces';

@Component({
  selector: 'app-laan-liste',
  templateUrl: './laan-liste.component.html',
  styleUrls: ['./laan-liste.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaanListeComponent {
  @Input()
  laan: Laan[];
}
