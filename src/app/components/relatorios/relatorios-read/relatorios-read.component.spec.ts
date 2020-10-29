import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosReadComponent } from './relatorios-read.component';

describe('RelatoriosReadComponent', () => {
  let component: RelatoriosReadComponent;
  let fixture: ComponentFixture<RelatoriosReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
