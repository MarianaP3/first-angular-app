import { Component } from '@angular/core';

@Component({
  selector: 'app-new-garment-page',
  imports: [],
  templateUrl: './new-garment-page.component.html',
  styleUrl: './new-garment-page.component.css'
})
export class NewGarmentPageComponent {
  sizes = ['XS', 'S', 'M', 'L', 'XL', 'Única'];
}
