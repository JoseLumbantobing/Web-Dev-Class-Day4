import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profileList } from '../mock/profile.mock';
import { FormGroup } from '@angular/forms';
import { UpdateModel } from '../model/updateProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfileList() {
    // Get API
    // return this.profileList;
    return this.http.get('https://reqres.in/api/users');
  }

  getProfileByNik(_nik: number) {
    // return profileList.find(x => x.nik === _nik);
    return this.http.get('https://reqres.in/api/user/' + _nik);
  }

  updateProfile(form: FormGroup) {
    const updateUser: UpdateModel = {
      name: form.value.name,
      email: form.value.email,
      birthdate: form.value.birthdate,
      address: form.value.address
    };

    console.log(updateUser);
  }
}
