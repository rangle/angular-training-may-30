import { Directive, Host } from '@angular/core';

@Directive({
  selector: '[appHeading]',
  host: {
    class: 'athelas mt0 lh-title',
  },
})
export class HeadingDirective {

  constructor() { }

}
