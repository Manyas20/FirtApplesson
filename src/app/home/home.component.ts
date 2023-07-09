import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HusingLocationComponent } from '../HousingLocation/HousingLocation.component';
import { Housinglocation } from '../HousingLocation';
import { HousingService } from '../housing.service';
import { ApartlocationComponent } from '../apartlocation/apartlocation.component';
import { AppartLocation } from '../appart-location';
import { AppartsService } from '../apparts.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    HusingLocationComponent,
    ApartlocationComponent,
    ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AppartLocationList: AppartLocation[] = [ ];
  AppartsService: AppartsService= inject(AppartsService)

  housingLocationList: Housinglocation[] = [ ];
  housingservice: HousingService = inject(HousingService);
  
  constructor() {  
    this.housingLocationList = this.housingservice.getAllHousingLocations();
    this.AppartLocationList = this.AppartsService.getAllAppartLocations();
  }
}


