import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'localhost:3000/register';
  private userRegisteredSubject = new BehaviorSubject<boolean>(false); 
  public userRegistered$ = this.userRegisteredSubject.asObservable();

  constructor(private httpService: HttpService) {}

  register(userData: any) {
    this.httpService.post(this.apiUrl, userData).subscribe(() => {
      this.userRegisteredSubject.next(true);
    });
  }

  isUserRegistered(): boolean {
    return this.userRegisteredSubject.value;  
  }
}