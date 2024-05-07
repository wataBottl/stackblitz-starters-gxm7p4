import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    
    <div class="square">
      <p>This square should have background 25% of var(--primary)
    </div>
  `,
  styles: `
    @use "./UI.scss" as UI;
 
    :host .square{
      aspect-ratio: 1/1;
      width: 150px;
      background-color: UI.getColor(primary, .25);
      outline: white 1px solid;
    }
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
