import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestasPrivadasComponent } from './fiestas-privadas.component';

describe('FiestasPrivadasComponent', () => {
  let component: FiestasPrivadasComponent;
  let fixture: ComponentFixture<FiestasPrivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiestasPrivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiestasPrivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
