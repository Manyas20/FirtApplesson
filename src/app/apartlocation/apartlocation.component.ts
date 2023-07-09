import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppartLocation } from '../appart-location';
import {  RouterModule } from '@angular/router';


@Component({
  selector: 'app-apartlocation',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './apartlocation.component.html',
  styleUrls: ['./apartlocation.component.css']
})
export class ApartlocationComponent {
  @Input () AppartLocation!: AppartLocation;

}




