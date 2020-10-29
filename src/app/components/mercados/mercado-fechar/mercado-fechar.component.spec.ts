import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoFecharComponent } from './mercado-fechar.component';

describe('MercadoFecharComponent', () => {
  let component: MercadoFecharComponent;
  let fixture: ComponentFixture<MercadoFecharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadoFecharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoFecharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
