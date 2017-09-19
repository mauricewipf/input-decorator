import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      Counter Component: {{searchString}}
    </div>
  `
})
export class CounterComponent {

  @Input()
  searchString: string;

  constructor() { }

}
