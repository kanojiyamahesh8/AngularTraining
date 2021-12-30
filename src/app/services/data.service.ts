import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public active_wizard: any = null;
  public active_house: any = null;
 // public house:any;
  //feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[""],"alive":true,"image":"http://hp-api.herokuapp.com/images/harry.jpg"};

  constructor(
    private http: HttpClient 
    
  ) { }

  getWizard() {
  return this.http.get('http://hp-api.herokuapp.com/api/characters');
  }

  getWizardByHouse(house:string) {
    if(house=="gryffindor") 
    return this.http.get('http://hp-api.herokuapp.com/api/characters/house/gryffindor');
    if(house=="ravenclaw") 
    return this.http.get('http://hp-api.herokuapp.com/api/characters/house/ravenclaw');
    if(house=="hufflepuff") 
    return this.http.get('http://hp-api.herokuapp.com/api/characters/house/hufflepuff');
    if(house=="slytherin") 
    return this.http.get('http://hp-api.herokuapp.com/api/characters/house/slytherin');
    
    
  
    return this.http.get('http://hp-api.herokuapp.com/api/characters');
  }

  
}

