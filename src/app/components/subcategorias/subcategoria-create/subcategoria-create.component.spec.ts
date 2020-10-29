import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaCreateComponent } from './subcategoria-create.component';

describe('SubcategoriaCreateComponent', () => {
  let component: SubcategoriaCreateComponent;
  let fixture: ComponentFixture<SubcategoriaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
