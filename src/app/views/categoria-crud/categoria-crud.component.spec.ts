import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCrudComponent } from './categoria-crud.component';

describe('CategoriaCrudComponent', () => {
  let component: CategoriaCrudComponent;
  let fixture: ComponentFixture<CategoriaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
