import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileModel } from 'src/app/model/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private pService: ProfileService, private route: ActivatedRoute) {
    this.route.params.subscribe((x: any) => {
      this.NIKKaryawan= x.id;
    })
  }

  karyawan: ProfileModel[] = [];
  NIKKaryawan: any;
  karyawanTerpilih: ProfileModel = new ProfileModel();

  ngOnInit(): void {
    this.karyawan = this.pService.profileList;

    if(this.NIKKaryawan) {
      this.karyawanTerpilih = this.pService.getProfileByNik(Number(this.NIKKaryawan)) || new ProfileModel();
    }
  }
}