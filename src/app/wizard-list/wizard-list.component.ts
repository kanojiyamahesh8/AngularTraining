import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-wizard-list',
  templateUrl: './wizard-list.component.html',
  styleUrls: ['./wizard-list.component.css']
})
export class WizardListComponent implements OnInit {
  data:any = [];
  data_of_single_wizard:string="";

 constructor(
    private dataservice: DataService,
    private router: Router
  ) { }  

 ngOnInit(): void {
    this.dataservice.getWizard().subscribe(
     (response:any) => { 
       this.data = response 
     } 
    );
   
   

}

onClick(character:any) {
  //this.data_of_single_wizard=character;
  this.dataservice.active_wizard=character;
  this.router.navigateByUrl('/wizard-details');
  console.log(this.dataservice.active_wizard);
 // return character;
  }
}
