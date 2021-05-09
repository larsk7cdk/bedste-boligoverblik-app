import { CommonModule } from '@angular/common';
import { LaanberegningModule } from '../laanberegning/laanberegning.module';
import { LaanberegningRoutingModule } from './laan-routing.module';
import { LaanListeComponent } from './presentational/laan-liste/laan-liste.component';
import { LaanOversigtComponent } from './containers/laan-oversigt/laan-oversigt.component';
import { LaanproduktModule } from '../laanprodukt/laanprodukt.module';
import { LaanRegistrerComponent } from './containers/laan-registrer/laan-registrer.component';
import { LaanService } from './services/laan.service';
import { LaanVisComponent } from './presentational/laan-vis/laan-vis.component';
import { NgModule } from '@angular/core';
import { NgxCurrencyModule } from 'ngx-currency';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LaanStateModule } from './+state/laan.state.module';

@NgModule({
  declarations: [
    LaanOversigtComponent,
    LaanRegistrerComponent,
    LaanListeComponent,
    LaanVisComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    SharedModule,
    LaanberegningRoutingModule,
    LaanStateModule,
    LaanproduktModule,
    LaanberegningModule,
  ],
  exports: [LaanOversigtComponent],
  providers: [LaanService],
})
export class LaanModule {}
