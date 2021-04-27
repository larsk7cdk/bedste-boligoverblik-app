import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { CustomNumberPipe } from './pipes/custom-number.pipe';

@NgModule({
  declarations: [SpinnerComponent, CustomNumberPipe],
  imports: [CommonModule, NgxBootstrapIconsModule.pick(allIcons)],
  exports: [NgxBootstrapIconsModule, SpinnerComponent, CustomNumberPipe],
  providers: [DecimalPipe, CustomNumberPipe],
})
export class SharedModule {}
