import { Component } from '@angular/core';
import { designer } from './model/designer';
import { engineer } from './model/engineer';
import { manajer } from './model/manajer';
import { Mobil } from './model/mobil';
import { motor } from './model/motor';
import { programmer } from './model/programmer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    //Local variable
    // const title = 'my-app-test';
    // this.gantiTitle(title);

    // const judulBaru = this.namaTitle();
    // this.gantiTitle(judulBaru);


    // Mobil
    this.suzuki.roda = 4;
    this.suzuki.maxPenumpang = 7;
    this.suzuki.mesin = "Diesel";
    this.suzuki.tipe = "XL7";
    this.suzuki.sunroof = false;
    this.namaFunction(9);

    // Sepeda Motor
    this.yamaha.roda = 2;
    this.yamaha.maxPenumpang = 2;
    this.yamaha.mesin = "Yamaha 135LC";
    this.yamaha.tipe = "Jupiter MX";
    this.yamaha.kickstand = true;
    this.yamaha.kickstandType = "standar kiri dan standar 2";

    // Programmer
    this.programmer.nama = "Jose";
    this.programmer.gaji = 7000000;
    this.programmer.bahasaPemograman = "Typescript";

    // Designer
    this.designer.nama = "Maramis";
    this.designer.gaji = 6000000;
    this.designer.jenisDesign = "UI/UX";

    // Manajer
    this.manajer.nama = "Purnama";
    this.manajer.role = "Pengembangan Tim";
    this.manajer.department = "IT dan Komunikasi";

    // Engineer
    this.engineer.nama = "Sari";
    this.engineer.role = "IT";
    this.engineer.Spesialisasi = "Frontend Engineer";
  }

  suzuki: Mobil = new Mobil();
  yamaha: motor = new motor();

  programmer: programmer = new programmer();
  designer: designer = new designer();

  manajer: manajer = new manajer();
  engineer: engineer = new engineer()

  
  namaFunction = (penumpang: number) => {
    this.suzuki.maxPenumpang = penumpang;
  }




  // Global Variable
  // title = 'my-app-false';


  // function void
  // gantiTitle(judul: string) {
  //   this.title = judul;
  // }

  // function return
  // namaTitle(){
  //   return 'Judul Baru';
  // }
}
