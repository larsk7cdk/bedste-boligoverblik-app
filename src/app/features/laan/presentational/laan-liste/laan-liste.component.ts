import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
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

  @Output()
  visLaan: EventEmitter<Laan> = new EventEmitter<Laan>();

  onVisLaan($event: Laan): void {
    this.visLaan.emit($event);
  }
}
