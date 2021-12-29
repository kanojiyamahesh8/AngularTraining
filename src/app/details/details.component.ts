import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { WizardListComponent } from '../wizard-list/wizard-list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data_of_wizard = this.dataservice.active_wizard ;
  //all_data: any = null;
  

  constructor(
    private dataservice: DataService,
    private router: Router
    
  ) { }

     ngOnInit(): void {
  //    for(; ;) {
    // this.data_of_wizard = this.dataservice.active_wizard;
     console.log(this.dataservice.active_wizard);
   // console.log(this.data_of_wizard);
   // }
    
  }
  
  onClickGoBack() {
    this.router.navigateByUrl('/wizard-list');
  }



}
