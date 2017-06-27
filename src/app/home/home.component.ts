import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonServiceService} from '../common-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commonsvc:CommonServiceService) { }
  list:Array<any>
  searchName:any;
  ngOnInit() {
    this.commonsvc.getList().subscribe(result=>{this.list=result});
  }

}
