import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostresComponent } from './lista-postres.component';

describe('ListaPostresComponent', () => {
  let component: ListaPostresComponent;
  let fixture: ComponentFixture<ListaPostresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPostresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
