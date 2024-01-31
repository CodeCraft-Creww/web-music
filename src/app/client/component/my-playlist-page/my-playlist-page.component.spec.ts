import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistPageComponent } from './my-playlist-page.component';

describe('MyPlaylistPageComponent', () => {
  let component: MyPlaylistPageComponent;
  let fixture: ComponentFixture<MyPlaylistPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPlaylistPageComponent]
    });
    fixture = TestBed.createComponent(MyPlaylistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
