import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmployeeServiceService } from './employee-service.service';

class EmployeeServiceMock {
  getEmployee() : any{
    return {
      'name' : 'Harry Potter',
      'email' : 'harry@gmail.com'
    };
  }
}
describe('AppComponent', () => {


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers : [
        { provide: EmployeeServiceService, useClass: EmployeeServiceMock }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TestApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TestApp');
  });

  it('should compute average of 2 Nos' , () =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.add(5,5);
    expect(app.result).toEqual(5);
  } )

  it('should compute grade', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.computeGrade(80)).toEqual('A');
    expect(app.computeGrade(60)).toEqual('B');
  });

  it('should get Employee Data' , ()=>{

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let emp = app.getEmployee();
    expect(emp.name).toBe('Harry Potter');
    expect(emp.email).toBe('harry@gmail.com');
  });

  afterEach(()=>{

  });
});
