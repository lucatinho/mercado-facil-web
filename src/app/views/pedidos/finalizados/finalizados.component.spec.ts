import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizadosComponent } from './finalizados.component';

describe('FinalizadosComponent', () => {
  let component: FinalizadosComponent;
  let fixture: ComponentFixture<FinalizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
