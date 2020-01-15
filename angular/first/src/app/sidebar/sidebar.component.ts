import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  visibleSidebar1= false;
  close=false
  

  empJson= [{Department:"IVS", Unit:"ECSADMC", EmpId:"001",EmpName:"George"},
  {Department:"DEV", Unit:"ECSADMC", EmpId:"002",EmpName:"Peter"},
  {Department:"IVS", Unit:"MFGADM", EmpId:"003",EmpName:"Roy"},
  {Department:"ORACLE", Unit:"FSADMC", EmpId:"005",EmpName:"Smith"},
  {Department:"DEV", Unit:"MFGADM", EmpId:"004",EmpName:"David"}]

   

  ngOnInit() {
  }
  w3_close(){
    this.close=true
  }

  deleteRow(id){
    for(let i = 0; i < this.empJson.length; ++i){
        if (this.empJson[i].EmpId === id) {
            this.empJson.splice(i,1);
        }
    }
}
}
