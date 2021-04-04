import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp';
  result: number;
  employee: any;
  name : string;

  names :string[] = [];
  constructor(private employeeService : EmployeeServiceService){
    this.employee = this.employeeService.getEmployee();

  }
  public add(x: number, y: number) : void{
   this.result =  (x+y) / 2;
  }

  public computeGrade(marks : number) : string{
    return marks > 75? 'A': 'B';
  }

  public getEmployee() : any{
      return this.employeeService.getEmployee();
  }

  getTitleText(){
    return 'TestApp app is running!';
  }

  addName(){
    this.names.push(this.name);
  }

  getNames(){
    return this.names;
  }
}
