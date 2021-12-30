import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  data:any = [];

  constructor(
    private dataservice: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataservice.getWizardByHouse(this.dataservice.active_house).subscribe(
      (response:any) => { 
        this.data = response ;
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

    onClickForBack(){
    this.router.navigateByUrl('/houses');
    }

    onClickForHome(){
    this.router.navigateByUrl('/home');
    }

}
