import { Component, input } from '@angular/core';
import { Garment } from '../../interfaces/garment.interface';

@Component({
  selector: 'app-garment-card',
  imports: [],
  templateUrl: './garment-card.component.html',
  styleUrl: './garment-card.component.css',
})
export class GarmentCardComponent {
  garment = input.required<Garment>();
}
