import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPribadiComponent } from './data-pribadi.component';

describe('DataPribadiComponent', () => {
  let component: DataPribadiComponent;
  let fixture: ComponentFixture<DataPribadiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataPribadiComponent]
    });
    fixture = TestBed.createComponent(DataPribadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
