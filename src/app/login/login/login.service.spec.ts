import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { LoginData, LoginRequest } from './login.model';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
      imports: [HttpClientTestingModule]
    });
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(LoginService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', inject([LoginService], (serv: LoginService) => {
    expect(serv).toBeTruthy();
  }));

  it('login should return data in proper format when success',
    fakeAsync(() => {
      const response: LoginData = {
        userName: 'username',
        accessToken: 'token',
        expiryInSeconds: 1000,
        result: 'Success',
        refreshToken: 'refToken',
      };

      const body: LoginRequest = {
        userName: 'username',
        password: 'password',
      };

      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      service.login(body).subscribe((res: LoginData) => {
        expect(res.accessToken).toBe(response.accessToken);
        expect(res.expiryInSeconds).toBe(response.expiryInSeconds);
        expect(res.result).toBe(response.result);
        expect(res.userName).toBe(response.userName);
      });

      // Expect a call to this URL
      const req = httpTestingController.expectOne(
        'token/login'
      );
      // Assert that the request is a POST.
      expect(req.request.method).toEqual('POST');
      // Respond with this data when called
      req.flush(response);

      // Call tick which actually processes te response
      tick();
    })
  );

  it('login should return data in proper format when fail',
    fakeAsync(() => {
      const response: LoginData = {
        accessToken: null,
        expiryInSeconds: 0,
        refreshToken: null,
        result: 'Invalid username or password.',
        userName: null
      };

      const body: LoginRequest = {
        userName: 'username',
        password: 'password',
      };

      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      service.login(body).subscribe((res: LoginData) => {
        expect(res.accessToken).toBe(response.accessToken);
        expect(res.expiryInSeconds).toBe(response.expiryInSeconds);
        expect(res.result).toBe(response.result);
        expect(res.userName).toBe(response.userName);
      });

      // Expect a call to this URL
      const req = httpTestingController.expectOne(
        'token/login'
      );
      // Assert that the request is a POST.
      expect(req.request.method).toEqual('POST');
      // Respond with this data when called
      req.flush(response);

      // Call tick which actually processes te response
      tick();
    })
  );
});
