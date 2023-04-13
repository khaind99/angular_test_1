import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpntest1Component } from './cpntest1.component';

describe('Cpntest1Component', () => {
  let component: Cpntest1Component;
  let fixture: ComponentFixture<Cpntest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cpntest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cpntest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
