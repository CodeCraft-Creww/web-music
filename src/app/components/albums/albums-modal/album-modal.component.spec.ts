import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumModalsComponent } from './album-modal.component';

describe('AlbumModalsComponent', () => {
  let component: AlbumModalsComponent;
  let fixture: ComponentFixture<AlbumModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumModalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
