import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProntoComponent } from './pedido-pronto.component';

describe('PedidoProntoComponent', () => {
  let component: PedidoProntoComponent;
  let fixture: ComponentFixture<PedidoProntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoProntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
