import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../HousingLocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './HousingLocation.component.html',
  styleUrls: ['./HousingLocation.component.css']
})
export class HusingLocationComponent {
  @Input() housingLocation!: Housinglocation;

  }

