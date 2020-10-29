import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaReadComponent } from './subcategoria-read.component';

describe('SubcategoriaReadComponent', () => {
  let component: SubcategoriaReadComponent;
  let fixture: ComponentFixture<SubcategoriaReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriaReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
