import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoReadComponent } from './pedido-read.component';

describe('PedidoReadComponent', () => {
  let component: PedidoReadComponent;
  let fixture: ComponentFixture<PedidoReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
