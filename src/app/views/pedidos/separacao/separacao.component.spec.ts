import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparacaoComponent } from './separacao.component';

describe('SeparacaoComponent', () => {
  let component: SeparacaoComponent;
  let fixture: ComponentFixture<SeparacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
