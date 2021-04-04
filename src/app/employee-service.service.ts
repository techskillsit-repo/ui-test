import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployee() : any{
    return {
      'name' : 'I. hirani',
      'email' : 'i.hirani@gmail.com'
    };
  }
}
