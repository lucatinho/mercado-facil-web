import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaUpdateComponent } from './marca-update.component';

describe('MarcaUpdateComponent', () => {
  let component: MarcaUpdateComponent;
  let fixture: ComponentFixture<MarcaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
