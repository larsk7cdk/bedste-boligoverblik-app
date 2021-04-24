import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaanproduktService } from './services/laanprodukt.service';
import { HttpClientModule } from '@angular/common/http';
import { LaanproduktStateModule } from './+state/laanprodukt.state.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, LaanproduktStateModule],
  providers: [LaanproduktService],
})
export class LaanproduktModule {}
