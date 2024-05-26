import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthomeComponent } from './testhome.component';

describe('TesthomeComponent', () => {
  let component: TesthomeComponent;
  let fixture: ComponentFixture<TesthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesthomeComponent]
    });
    fixture = TestBed.createComponent(TesthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
