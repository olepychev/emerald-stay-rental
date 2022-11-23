import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { SplashRoutingModule } from './splash-routing.module';
import { SplashComponent } from './splash.component';

@NgModule({
  declarations: [SplashComponent],
  imports: [CommonModule, SplashRoutingModule, MatIconModule],
})
export class SplashModule {}
