import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironementComponent } from './environement.component';

describe('EnvironementComponent', () => {
  let component: EnvironementComponent;
  let fixture: ComponentFixture<EnvironementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironementComponent]
    });
    fixture = TestBed.createComponent(EnvironementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
