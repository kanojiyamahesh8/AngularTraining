import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { WizardListComponent } from '../wizard-list/wizard-list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data_of_wizard = { "name":"Harry Potter","alternate_names":[""],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[""],"alive":true,"image":"http://hp-api.herokuapp.com/images/harry.jpg"};
  all_data: any = null;
  

  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit(): void {
    // this.dataservice.getWizard().subscribe(
    //   (response:any)=>  {
    //     this.all_data=response;
    //     console.log(response);
    //   }
    // )
  }

  





}
