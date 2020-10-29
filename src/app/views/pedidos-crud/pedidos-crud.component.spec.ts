import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCrudComponent } from './pedidos-crud.component';

describe('PedidosCrudComponent', () => {
  let component: PedidosCrudComponent;
  let fixture: ComponentFixture<PedidosCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
