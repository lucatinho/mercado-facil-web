import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaUptadeComponent } from './subcategoria-uptade.component';

describe('SubcategoriaUptadeComponent', () => {
  let component: SubcategoriaUptadeComponent;
  let fixture: ComponentFixture<SubcategoriaUptadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriaUptadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriaUptadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
