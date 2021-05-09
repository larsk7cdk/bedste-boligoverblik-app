import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-street-view',
  templateUrl: './street-view.component.html',
  styleUrls: ['./street-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreetViewComponent implements OnInit {
  src: string;

  @Input()
  longitude: number;

  @Input()
  latitude: number;

  ngOnInit(): void {
    this.src = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${this.longitude},${this.latitude}&fov=80&heading=80&pitch=0&key=AIzaSyBangEFVsTXt68GZQop7c7y1PUR_elunX4`;
  }
}