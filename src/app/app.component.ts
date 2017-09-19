import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input type="text" [(ngModel)]="str">
    </div>
    <div>
      App Component: {{str}}
    </div>
    <app-counter
      [searchString]="str">
    </app-counter>
  `
})
export class AppComponent {

  str: string;

}

/**
 * in app.module.ts
 *
 * import { FormsModule } from '@angular/forms';
 *
 * imports: [
 *  FormsModule
 * ]
 *
 * to be able to use ngModel
 */
