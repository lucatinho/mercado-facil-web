import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaUptadeComponent } from './categoria-uptade.component';

describe('CategoriaUptadeComponent', () => {
  let component: CategoriaUptadeComponent;
  let fixture: ComponentFixture<CategoriaUptadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaUptadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaUptadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
