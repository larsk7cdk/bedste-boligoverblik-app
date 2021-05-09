import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaanproduktService } from './services/laanprodukt.service';
import { LaanproduktStateModule } from './+state/laanprodukt.state.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LaanproduktStateModule],
  providers: [LaanproduktService],
})
export class LaanproduktModule {}
