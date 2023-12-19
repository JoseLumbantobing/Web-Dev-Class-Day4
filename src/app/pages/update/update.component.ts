import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileModel } from 'src/app/model/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(private pService: ProfileService) { }

  profileForm: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    avatar: new FormControl('', Validators.required)
  });

  @Input() tipe: string = '';
  @Input() karyawan: ProfileModel[] = [];

  updateProfile(form: FormGroup) {
    if (this.profileForm.invalid) {
      return;
    }

    if(this.tipe === 'update') {
      this.pService.updateProfileData(form, this.karyawan);
    } else {
      this.pService.addProfileData(form, this.karyawan);
    }
  }
}
