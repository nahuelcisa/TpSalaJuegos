import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaJuegosComponent } from './sala-juegos.component';

describe('SalaJuegosComponent', () => {
  let component: SalaJuegosComponent;
  let fixture: ComponentFixture<SalaJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
