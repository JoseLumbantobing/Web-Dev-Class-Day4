import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() tahun: string = '2023';
  @Input() nama: string = 'Jose Tobing';

  @Output() copyright: EventEmitter<boolean> = new EventEmitter();

  isButtonVisible: boolean = true;

  changeHeader(){
    this.copyright.emit(true);
    this.isButtonVisible = false;
  }
}
