import { Injectable } from '@angular/core';
import { ProfileModel } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  // array of object
  profileList: ProfileModel[] = [
    {
      nik: 1,
      name: 'Albert',
      job: 'Programmer',
      join_date: '2022-01-01'
    },
    {
      nik: 2,
      name: 'Juan',
      job: 'System Analyst',
      join_date: '2022-02-02'
    },
    {
      nik:3,
      name: 'Jacob',
      job: 'QA',
      join_date: '2022-03-03'
    }
  ];

  getProfileList() {
    // Get API
    return this.profileList;
  }

  getProfileByNik(_nik: number) {
    return this.profileList.find(x => x.nik === _nik);
  }
}
