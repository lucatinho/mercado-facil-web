import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaCreateComponent } from './marca-create.component';

describe('MarcaCreateComponent', () => {
  let component: MarcaCreateComponent;
  let fixture: ComponentFixture<MarcaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
