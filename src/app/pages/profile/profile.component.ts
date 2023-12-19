import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileModel } from 'src/app/model/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('Semmy'),
  //   email: new FormControl(''),
  //   message: new FormControl('')
  // });

  constructor(private pService: ProfileService, private route: ActivatedRoute) {
    this.route.params.subscribe((x: any) => {
      this.NIKKaryawan= x.id;
    });

    this.route.url.subscribe((segments) => {
      this.isUpdate = segments.some((segment) => segment.path === 'update');
    });

    this.route.url.subscribe((segments) => {
      this.isAdd = segments.some((segment) => segment.path === 'add');
    });
  }

  karyawan: ProfileModel[] = [];
  NIKKaryawan: any;
  karyawanTerpilih: ProfileModel = new ProfileModel();
  isUpdate: boolean = false;
  isAdd: boolean = false;

  ngOnInit(): void {
    this.pService.getProfileList().subscribe((x: any) => {
      this.karyawan = x.data;
    })

  if(this.NIKKaryawan) {
    this.pService.getProfileByNik(Number(this.NIKKaryawan)).subscribe(x => {
      console.log(x);
    });
  }
  }

  // onSubmit(form: FormGroup) {
  //   console.log('', form.valid);
  //   console.log('Name:', form.value.name);
  //   console.log('Email:', form.value.email);
  //   console.log('Message:', form.value.message);
  // }
}