import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { RouterModule,  } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HusingLocationComponent } from './HousingLocation/HousingLocation.component';
import { ApartlocationComponent } from './apartlocation/apartlocation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, 
    RouterModule,
    DetailsComponent,
    HusingLocationComponent ,
    ApartlocationComponent,

  ],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
