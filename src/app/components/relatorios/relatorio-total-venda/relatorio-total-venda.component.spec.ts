import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioTotalVendaComponent } from './relatorio-total-venda.component';

describe('RelatorioTotalVendaComponent', () => {
  let component: RelatorioTotalVendaComponent;
  let fixture: ComponentFixture<RelatorioTotalVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioTotalVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioTotalVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
