import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailPageComponent } from './artist-detail-page.component';

describe('ArtistDetailPageComponent', () => {
  let component: ArtistDetailPageComponent;
  let fixture: ComponentFixture<ArtistDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistDetailPageComponent]
    });
    fixture = TestBed.createComponent(ArtistDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
