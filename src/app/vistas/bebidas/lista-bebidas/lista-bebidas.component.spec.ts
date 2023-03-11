import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBebidasComponent } from './lista-bebidas.component';

describe('ListaBebidasComponent', () => {
  let component: ListaBebidasComponent;
  let fixture: ComponentFixture<ListaBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
