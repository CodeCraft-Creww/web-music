import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenersListComponent } from './geners-list.component';

describe('GenersListComponent', () => {
  let component: GenersListComponent;
  let fixture: ComponentFixture<GenersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
