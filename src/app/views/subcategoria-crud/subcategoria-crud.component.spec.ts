import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaCrudComponent } from './subcategoria-crud.component';

describe('SubcategoriaCrudComponent', () => {
  let component: SubcategoriaCrudComponent;
  let fixture: ComponentFixture<SubcategoriaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
