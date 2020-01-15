import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {  NextpageComponent} from "./nextpage/nextpage.component";


const routes: Routes = [
  
    
    { path: 'details', component: NextpageComponent },
    // { path: 'home', component: SidebarComponent },
    { path: '', component:LoginComponent },
    { path: 'details/:logout', component:LoginComponent },
    // { path: '**', component: }
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
