import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEnviadoComponent } from './info-enviado.component';

describe('InfoEnviadoComponent', () => {
  let component: InfoEnviadoComponent;
  let fixture: ComponentFixture<InfoEnviadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEnviadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
