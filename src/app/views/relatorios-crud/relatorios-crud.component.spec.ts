import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosCrudComponent } from './relatorios-crud.component';

describe('RelatoriosCrudComponent', () => {
  let component: RelatoriosCrudComponent;
  let fixture: ComponentFixture<RelatoriosCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
