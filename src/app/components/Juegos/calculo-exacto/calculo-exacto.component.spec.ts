import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoExactoComponent } from './calculo-exacto.component';

describe('CalculoExactoComponent', () => {
  let component: CalculoExactoComponent;
  let fixture: ComponentFixture<CalculoExactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoExactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoExactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
