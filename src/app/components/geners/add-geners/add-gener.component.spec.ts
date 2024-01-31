import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenerComponent } from './add-geners.component';

describe('AddGenerComponent', () => {
  let component: AddGenerComponent;
  let fixture: ComponentFixture<AddGenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
