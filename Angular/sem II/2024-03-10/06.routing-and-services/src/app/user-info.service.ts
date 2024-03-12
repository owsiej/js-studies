import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private ageVerified: boolean = false;
  constructor() {}

  verifyAge() {
    this.ageVerified = true;
  }

  getAgeVerification() {
    return this.ageVerified;
  }
  resetAge() {
    this.ageVerified = false;
  }
}
