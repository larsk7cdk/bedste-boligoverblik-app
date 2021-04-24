import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, NgxBootstrapIconsModule.pick(allIcons)],
  exports: [NgxBootstrapIconsModule, SpinnerComponent],
})
export class SharedModule {}
