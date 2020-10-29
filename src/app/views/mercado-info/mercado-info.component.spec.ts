import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoInfoComponent } from './mercado-info.component';

describe('MercadoInfoComponent', () => {
  let component: MercadoInfoComponent;
  let fixture: ComponentFixture<MercadoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
