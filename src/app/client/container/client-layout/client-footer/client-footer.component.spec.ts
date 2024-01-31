import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFooterComponent } from './client-footer.component';

describe('ClientFooterComponent', () => {
  let component: ClientFooterComponent;
  let fixture: ComponentFixture<ClientFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientFooterComponent]
    });
    fixture = TestBed.createComponent(ClientFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
