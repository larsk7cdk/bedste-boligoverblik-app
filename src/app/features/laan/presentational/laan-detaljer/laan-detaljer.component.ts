import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { Laan } from '../../+state/laan.interfaces';

@Component({
  selector: 'app-laan-detaljer',
  templateUrl: './laan-detaljer.component.html',
  styleUrls: ['./laan-detaljer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaanDetaljerComponent implements OnInit {
  @Input()
  laan: Laan;

  constructor() {}

  ngOnInit(): void {}
}
