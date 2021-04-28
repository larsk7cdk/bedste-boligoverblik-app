import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  onVisLaan($event: Laan): void {
    console.log('$event', $event);
    this.router.navigate(['laan/vis'], { state: $event });
  }
}
