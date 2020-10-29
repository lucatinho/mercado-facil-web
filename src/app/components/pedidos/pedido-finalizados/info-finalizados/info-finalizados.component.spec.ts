import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFinalizadosComponent } from './info-finalizados.component';

describe('InfoFinalizadosComponent', () => {
  let component: InfoFinalizadosComponent;
  let fixture: ComponentFixture<InfoFinalizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFinalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
