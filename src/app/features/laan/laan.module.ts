import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaanberegningModule } from '../laanberegning/laanberegning.module';
import { LaanberegningRoutingModule } from './laan-routing.module';
import { LaanOpretComponent } from './containers/laan-opret/laan-opret.component';
import { LaanOversigtComponent } from './containers/laan-oversigt/laan-oversigt.component';
import { LaanproduktModule } from '../laanprodukt/laanprodukt.module';
import { LaanService } from './services/laan.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LaanStateModule } from './+state/laan.state.module';

@NgModule({
  declarations: [LaanOversigtComponent, LaanOpretComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LaanberegningRoutingModule,
    LaanStateModule,
    SharedModule,
    LaanproduktModule,
    LaanberegningModule,
  ],
  exports: [LaanOversigtComponent],
  providers: [LaanService],
})
export class LaanModule {}
