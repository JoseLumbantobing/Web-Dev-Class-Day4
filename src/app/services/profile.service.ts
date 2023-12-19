import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profileList } from '../mock/profile.mock';
import { FormGroup } from '@angular/forms';
import { UpdateModel } from '../model/updateProfile';
import { ProfileModel } from '../model/profile';

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

  updateProfileData(form: FormGroup, karyawan: ProfileModel[]) {
    const updateUser: ProfileModel = {
      id: 99,
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      avatar: form.value.avatar
    };

    const updateValue = karyawan.findIndex(x => x.email === form.value.email);

    if(updateValue > -1) {
      karyawan[updateValue] = updateUser;
      form.reset();
    } else {
      alert('Data user tidak ditemukan');
    }
  }

  addProfileData(form: FormGroup, karyawan: ProfileModel[]) {
    const addUser: ProfileModel = {
      id: 99,
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      avatar: form.value.avatar
    };

    const addValue = karyawan.findIndex(x => x.email === form.value.email);

    if(addValue > -1) {
      alert('Sudah ada User.')
    } else {
      karyawan.push(addUser);
      form.reset();
    }
  }
}
