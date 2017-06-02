import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollingActions } from './polling.actions';
import { PollingEpic } from './polling.epic';

@NgModule({
  imports: [CommonModule],
  providers: [PollingActions, PollingEpic],
})
export class PollingModule {}
