import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../HousingLocation';
import { RouterModule, RouterLink, RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    RouterLink,
    RouterOutlet],
  templateUrl: './HousingLocation.component.html',
  styleUrls: ['./HousingLocation.component.css']
})
export class HusingLocationComponent {
  @Input() housingLocation!: Housinglocation;

  }

