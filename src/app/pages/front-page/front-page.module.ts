import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page.component';
import { FrontPageRoutingModule } from './front-page-routing.module';

@NgModule({
  declarations: [FrontPageComponent],
  imports: [CommonModule, FrontPageRoutingModule],
})
export class FrontPageModule {}
