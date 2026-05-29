import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Garment } from '../../interfaces/garment.interface';
import { GarmentCardComponent } from '../../components/garment-card/garment-card.component';

@Component({
  selector: 'app-inventory-page',
  imports: [GarmentCardComponent, RouterLink],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.css',
})
export class InventoryPageComponent {
  public garments = signal<Garment[]>([
    {
      name: 'Blazer oversize',
      type: 'Chaqueta',
      color: 'Beige',
      size: 'M',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c726dae?w=400&h=500&fit=crop',
    },
    {
      name: 'Vestido midi satinado',
      type: 'Vestido',
      color: 'Rojo',
      size: 'S',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
    },
    {
      name: 'Pantalón wide leg',
      type: 'Pantalón',
      color: 'Negro',
      size: 'L',
      image: 'https://images.unsplash.com/photo-1594633312681-425a7b956cc9?w=400&h=500&fit=crop',
    },
    {
      name: 'Camisa de lino',
      type: 'Camisa',
      color: 'Blanco',
      size: 'M',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b23?w=400&h=500&fit=crop',
    },
    {
      name: 'Falda plisada',
      type: 'Falda',
      color: 'Verde oliva',
      size: 'S',
      image: 'https://images.unsplash.com/photo-1583496664526-fddd863a0666?w=400&h=500&fit=crop',
    },
    {
      name: 'Bolso estructurado',
      type: 'Accesorio',
      color: 'Marrón',
      size: 'Única',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
    },
    {
      name: 'Suéter de punto',
      type: 'Suéter',
      color: 'Crema',
      size: 'L',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
    },
    {
      name: 'Tenis blancos',
      type: 'Calzado',
      color: 'Blanco',
      size: '26',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop',
    },
  ]);

  public filterName = signal('');
  public filterType = signal('');
  public filterColor = signal('');
  public filterSize = signal('');

  public types = computed(() => [...new Set(this.garments().map((g) => g.type))].sort());
  public colors = computed(() => [...new Set(this.garments().map((g) => g.color))].sort());
  public sizes = computed(() => [...new Set(this.garments().map((g) => g.size))].sort());

  public filteredGarments = computed(() =>
    this.garments().filter((garment) => {
      const name = this.filterName().trim().toLowerCase();
      if (name && !garment.name.toLowerCase().includes(name)) return false;
      if (this.filterType() && garment.type !== this.filterType()) return false;
      if (this.filterColor() && garment.color !== this.filterColor()) return false;
      if (this.filterSize() && garment.size !== this.filterSize()) return false;
      return true;
    }),
  );

  updateFilterName(event: Event): void {
    this.filterName.set((event.target as HTMLInputElement).value);
  }

  updateFilterType(event: Event): void {
    this.filterType.set((event.target as HTMLSelectElement).value);
  }

  updateFilterColor(event: Event): void {
    this.filterColor.set((event.target as HTMLSelectElement).value);
  }

  updateFilterSize(event: Event): void {
    this.filterSize.set((event.target as HTMLSelectElement).value);
  }

  clearFilters(): void {
    this.filterName.set('');
    this.filterType.set('');
    this.filterColor.set('');
    this.filterSize.set('');
  }
}
