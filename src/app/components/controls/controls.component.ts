import { Component, output } from '@angular/core';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css',
})
export class ControlsComponent {
  sortByName = output<void>();
  sortByPopulation = output<void>();
}
