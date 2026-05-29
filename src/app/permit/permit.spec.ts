import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Permit } from './permit';

describe('Permit', () => {
  let component: Permit;
  let fixture: ComponentFixture<Permit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Permit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Permit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
