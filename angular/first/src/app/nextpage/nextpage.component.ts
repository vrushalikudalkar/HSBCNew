import { Component, OnInit } from '@angular/core';
import { RamlService } from "../raml.service";
// declare var raml: any;
@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {

  allData=[];
  finalData=[];
  fetchedData=[];
  file;
  ramlJson;
  Raml;
  dummyArray1 = [];
  dummyArray2 = [];
  dummyArray3 = [];
  dummyArray4 = [];
  dummyArray5 = [];
  statusCode =  '';
  details = '';
  variable;
  constructor(private serv: RamlService) { }
  home1=false
  schema1=false
  empJson= [{Department:"IVS", Unit:"ECSADMC", EmpId:"001",EmpName:"George"},
  {Department:"DEV", Unit:"ECSADMC", EmpId:"002",EmpName:"Peter"},
  {Department:"IVS", Unit:"MFGADM", EmpId:"003",EmpName:"Roy"},
  {Department:"ORACLE", Unit:"FSADMC", EmpId:"005",EmpName:"Smith"},
  {Department:"DEV", Unit:"MFGADM", EmpId:"004",EmpName:"David"}] 
  ngOnInit() {
    

//     RAML.Parser.loadFile('C:\Users\Vrushali\Desktop').then( function(data) {
//   console.log(data)
// }, function(error) {
//   console.log('Error parsing: ' + error);
// });

    console.log("in component")
    this.serv.getData().subscribe((success)=>{
      console.log("success",success)
      this.ramlJson = success

      // -----------------------------try------------------
      for (var i of this.ramlJson.specification){

      }
      // ----------------------------------------------
      
      // console.log(this.ramlJson)
      
      // console.log(this.dummyArray3)
      // this.allData.push(success)
      // for(let i of this.allData){
        // console.log(i)
      //   for(let j of i){
      //     this.finalData.push(j)
      //   }
      // }

      // console.log(this.finalData)
      // for(let k of this.finalData){
      //   this.fetchedData.push(k['/customers:'])
      // }
      // console.log(this.fetchedData)

    }, (failure)=>{
      console.log("failed")
    })
  }
  w3_homeClose(){
    this.home1=false
  }
  w3_homeOpen(){
this.home1=true
  }
  w3_schemaClose(){
    this.schema1=false
  }
  w3_schemaOpen(){
this.schema1=true
  }

  fileChanged(e){
    console.log(e)
    this.file = e.target.files[0]
    console.log("file", this.file)
  }

  uploadDocument(file){
    let fileReader = new FileReader()
    fileReader.onload= (e) =>{
      console.log("fileReader", fileReader.result)
      this.Raml=fileReader.result
      console.log(this.Raml)
      console.log("postdata prynt")
    this.serv.postData(fileReader.result).subscribe((successData)=>{
      console.log("yayy",successData)
      
      this.variable=successData

      // -----------------------------------------tryout---------------------------------------
      for (let i of this.variable.specification.resources){
        this.dummyArray1.push(i.resources)
        for (let j of i.resources){
          // this.dummyArray2.push(j)
          for (let k of j.methods){
            // this.dummyArray3.push(k.responses)
            for (let l of k.responses){
              // this.dummyArray4.push(l.body)
              this.statusCode = l.code
              for(let m of l.body){
                // this.dummyArray5.push(m.examples)
                for (let n of m.examples){
                  this.details = n.value.data
                  // this.dummyArray5.push(n.value.data)
                  for (let o of n.value.data){
                    // this.dummyArray5.push()
                  }
                }
              }
            }
          }
        }
      }

    },
    (failure)=>{
      console.log("failure")
    })
      
    }
    fileReader.readAsText(this.file)
    
  }

}
