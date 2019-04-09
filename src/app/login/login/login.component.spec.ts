import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './login.service';
import { LoginData } from './login.model';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService;
  let loginServiceSpy;
  const response: LoginData = {
    userName: 'username',
    accessToken: 'token',
    expiryInSeconds: 1000,
    result: 'Success',
    refreshToken: 'refToken',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    loginService = TestBed.get(LoginService);
    loginServiceSpy = spyOn(loginService, 'login').and.returnValue(of(response));
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login form should be invalid with incomplete data', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeFalsy();
    // tslint:disable-next-line:no-string-literal
    component.loginForm.controls['userName'].setValue('username');
    // tslint:disable-next-line:no-string-literal
    component.loginForm.controls['password'].setValue('password');
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeTruthy();
    // tslint:disable-next-line:no-string-literal
    component.loginForm.controls['password'].setValue('');
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeFalsy();
  });
});
