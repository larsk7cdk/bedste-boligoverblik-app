import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { CustomNumberPipe } from './pipes/custom-number.pipe';
import { StreetViewComponent } from './components/street-view/street-view.component';

@NgModule({
  declarations: [SpinnerComponent, CustomNumberPipe, StreetViewComponent],
  imports: [CommonModule, NgxBootstrapIconsModule.pick(allIcons)],
  exports: [NgxBootstrapIconsModule, SpinnerComponent, CustomNumberPipe, StreetViewComponent],
  providers: [DecimalPipe, CustomNumberPipe],
})
export class SharedModule {}
