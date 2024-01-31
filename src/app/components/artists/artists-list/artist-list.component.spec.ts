import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsListComponent } from './artist-list.component';

describe('ArtistsListComponent', () => {
  let component: ArtistsListComponent;
  let fixture: ComponentFixture<ArtistsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
