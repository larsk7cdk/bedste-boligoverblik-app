import { BoligOversigtComponent } from './containers/bolig-oversigt/bolig-oversigt.component';
import { BoligRegistrerComponent } from './containers/bolig-registrer/bolig-registrer.component';
import { BoligRoutingModule } from './bolig-routing.module';
import { BoligService } from './services/bolig.service';
import { BoligVisComponent } from './containers/bolig-vis/bolig-vis.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaanModule } from '../laan/laan.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BoligStateModule } from './+state/bolig.state.module';

@NgModule({
  declarations: [
    BoligOversigtComponent,
    BoligRegistrerComponent,
    BoligVisComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BoligRoutingModule,
    BoligStateModule,
    SharedModule,
    LaanModule,
  ],
  exports: [BoligOversigtComponent],
  providers: [BoligService],
})
export class BoligModule {}
