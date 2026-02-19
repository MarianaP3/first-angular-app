import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-new-country-page',
  imports: [],
  templateUrl: './new-country-page.component.html',
  styleUrl: './new-country-page.component.css'
})
export class NewCountryPageComponent {
  regions: Country['region'][] = [
    'Americas',
    'Europe',
    'Asia',
    'Oceania',
    'Africa'
  ];
}
