import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor(private dataservice: DataService,
    // autherization goes here
  ){}
  currentUser:number=0
  clients:any =[];
  ngOnInit(): void {
    this.clientData();
    // this.currentUser();
  }
  clientData(){
    this.dataservice.getAllCustomer().subscribe(res=>{
      if(res['status']=='success'){
        this.clients = res.data!['customer']
      }
    })
  }
}
