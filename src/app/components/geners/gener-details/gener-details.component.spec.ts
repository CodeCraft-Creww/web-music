import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerDetailsComponent } from './gener-details.component';

describe('GenerDetailsComponent', () => {
  let component: GenerDetailsComponent;
  let fixture: ComponentFixture<GenerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
