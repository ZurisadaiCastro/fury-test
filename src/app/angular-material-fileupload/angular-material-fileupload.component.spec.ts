import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialFileuploadComponent } from './angular-material-fileupload.component';

describe('AngularMaterialFileuploadComponent', () => {
  let component: AngularMaterialFileuploadComponent;
  let fixture: ComponentFixture<AngularMaterialFileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialFileuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
