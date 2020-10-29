import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoAlterarComponent } from './mercado-alterar.component';

describe('MercadoAlterarComponent', () => {
  let component: MercadoAlterarComponent;
  let fixture: ComponentFixture<MercadoAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadoAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
