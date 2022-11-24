import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-angular-project',
  templateUrl: './first-angular-project.component.html',
  styleUrls: ['./first-angular-project.component.css']
})
export class FirstAngularProjectComponent implements OnInit {

 getInfo: Array<SignIn> = [
  {
    userName : "Sevil",
    password : 111323,
  },
 ]
 name: string;
 pass: number;
 check: boolean = false;
 foodName:string;
 drinkName:string;
 listArr: Array<string>=[];

 btnSign ():void {
  if(this.name==this.getInfo[0].userName && this.pass==this.getInfo[0].password){
    this.check = true
  }
  else{
    this.check = false
    alert("vvfvfv");
  }
 }
 getList(): void{
  this.listArr.push(this.foodName);
  
 }

  constructor() { }
  ngOnInit(): void {
  }
}
class SignIn {
  userName: string;
  password: number;
}

