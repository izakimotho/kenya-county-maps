import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kenya-map';


  selectedCounty: any = [
    {'code': 'ND', 'users': 324, 'org type' :'Service Provider'}, 
    {'code': 'WA', 'users': 454, 'org type' :'Manufacturer'}, 
    {'code':'AZ', 'users': 234, 'org type' :'Service Provider'}, 
    {'code' : 'AK', 'users': 544, 'org type' :'Manufacturer'},
    {'code' : 'CT', 'users': 544, 'org type' :'Manufacturer'},
    {'code' : 'DC', 'users': 544, 'org type' :'Manufacturer'},
  ];
}
