import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.scss'],
})
export class NotFoundComponent {}
