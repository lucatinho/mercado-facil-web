import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEnviadoComponent } from './pedido-enviado.component';

describe('PedidoEnviadoComponent', () => {
  let component: PedidoEnviadoComponent;
  let fixture: ComponentFixture<PedidoEnviadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoEnviadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
