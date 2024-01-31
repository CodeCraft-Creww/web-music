import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsPageComponent } from './songs-page.component';

describe('SongsPageComponent', () => {
  let component: SongsPageComponent;
  let fixture: ComponentFixture<SongsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongsPageComponent]
    });
    fixture = TestBed.createComponent(SongsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
