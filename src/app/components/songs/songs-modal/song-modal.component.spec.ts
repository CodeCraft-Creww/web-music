import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongModalsComponent } from './song-modal.component';

describe('SongModalsComponent', () => {
  let component: SongModalsComponent;
  let fixture: ComponentFixture<SongModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongModalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
