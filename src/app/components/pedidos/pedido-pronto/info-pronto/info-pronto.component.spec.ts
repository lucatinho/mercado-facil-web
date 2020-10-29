import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProntoComponent } from './info-pronto.component';

describe('InfoProntoComponent', () => {
  let component: InfoProntoComponent;
  let fixture: ComponentFixture<InfoProntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
