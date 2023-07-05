import { Injectable } from '@angular/core';
import { AppartLocation } from './appart-location';

@Injectable({
  providedIn: 'root'
})
export class AppartsService {

  protected AppartLocationList: AppartLocation[] = [ 
    { id: 9999,
    name: 'Test App',
    city: 'Douala',
    state: 'Bonaberi',
    photo: 'assets/24.5 article-image-2.jpg',
    availableUnits: 99,
    wifi: true,
  },
    {
    id: 99,
    name: 'T Interface',
    city: 'Yaounde',
    state: 'ST antoine',
    photo:'assets/1.jpg' ,
    availableUnits: 99,
    wifi: true,
    
    }
  ];

  getAllAppartLocations(): AppartLocation[] {
    return this.AppartLocationList;
  }
  
  getAppartLocationById(id: number): AppartLocation | undefined {
    return this.AppartLocationList.find(AppartLocation => AppartLocation.id === id);
  }
}
