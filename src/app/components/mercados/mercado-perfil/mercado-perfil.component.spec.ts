import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoPerfilComponent } from './mercado-perfil.component';

describe('MercadoPerfilComponent', () => {
  let component: MercadoPerfilComponent;
  let fixture: ComponentFixture<MercadoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
