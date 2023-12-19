import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(private pService: ProfileService) { }

  profileForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthdate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });

  updateProfile(form: FormGroup) {
    if (this.profileForm.invalid) {
      return;
    }

    this.pService.updateProfile(this.profileForm.value);
    // this.pService.updateProfile(form);
  }
}
