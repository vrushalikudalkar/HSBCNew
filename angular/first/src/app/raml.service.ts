import { Injectable } from '@angular/core';
import { observable,of } from "rxjs";
import { HttpClient , HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RamlService {

    url="http://localhost:3100/ramlData";
    posturl="http://localhost:3100/postRamlData";

  constructor( private http: HttpClient) {  }

  getData(){
    console.log("In service")
    return this.http.get(this.url)
  }

  postData(postdata){
    console.log("in post service",postdata)
    // console.log(postdata)
    return this.http.post(this.posturl, postdata)
    
  }
}
