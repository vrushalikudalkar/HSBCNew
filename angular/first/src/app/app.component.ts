import { Component } from '@angular/core';
import { Header } from 'primeng/api/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  close=false
  visibleSidebar1=true;
  dialog=false
  w3_open(){
    this.close=true
  }
  w3_close(){
this.close=false
  }
  show(){
    Header:"WElcome"
     this.dialog= true
  }
}
