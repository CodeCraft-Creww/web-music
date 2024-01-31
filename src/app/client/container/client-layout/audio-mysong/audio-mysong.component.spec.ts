import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioMysongComponent } from './audio-mysong.component';

describe('AudioMysongComponent', () => {
  let component: AudioMysongComponent;
  let fixture: ComponentFixture<AudioMysongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioMysongComponent]
    });
    fixture = TestBed.createComponent(AudioMysongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
