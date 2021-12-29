import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public active_wizard: any = null;
  //feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[""],"alive":true,"image":"http://hp-api.herokuapp.com/images/harry.jpg"};

  constructor(
    private http: HttpClient 
    
  ) { }

  getWizard() {
  return this.http.get('http://hp-api.herokuapp.com/api/characters');
  }
}

