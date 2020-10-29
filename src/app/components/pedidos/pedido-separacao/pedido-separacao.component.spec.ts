import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoSeparacaoComponent } from './pedido-separacao.component';

describe('PedidoSeparacaoComponent', () => {
  let component: PedidoSeparacaoComponent;
  let fixture: ComponentFixture<PedidoSeparacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoSeparacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoSeparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
