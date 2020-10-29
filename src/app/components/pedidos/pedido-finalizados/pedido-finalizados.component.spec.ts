import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoFinalizadosComponent } from './pedido-finalizados.component';

describe('PedidoFinalizadosComponent', () => {
  let component: PedidoFinalizadosComponent;
  let fixture: ComponentFixture<PedidoFinalizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoFinalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
