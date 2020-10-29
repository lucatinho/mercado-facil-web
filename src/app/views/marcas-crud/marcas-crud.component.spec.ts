import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasCrudComponent } from './marcas-crud.component';

describe('MarcasCrudComponent', () => {
  let component: MarcasCrudComponent;
  let fixture: ComponentFixture<MarcasCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
