import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import {Inform } from '../info'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detail: Inform[];
  
  constructor( private userserv: UsersService) { }
  getdetails(): void {
    this.userserv.getdetails()
        .subscribe((data: Inform[]) => {
          console.log(data);
          this.detail = data;
        });
  }
  

  ngOnInit() {
    this.getdetails();
  }

}
