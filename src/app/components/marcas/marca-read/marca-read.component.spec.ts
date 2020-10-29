import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaReadComponent } from './marca-read.component';

describe('MarcaReadComponent', () => {
  let component: MarcaReadComponent;
  let fixture: ComponentFixture<MarcaReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
