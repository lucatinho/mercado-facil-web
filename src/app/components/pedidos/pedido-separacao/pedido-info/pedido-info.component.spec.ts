import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoInfoComponent } from './pedido-info.component';

describe('PedidoInfoComponent', () => {
  let component: PedidoInfoComponent;
  let fixture: ComponentFixture<PedidoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
