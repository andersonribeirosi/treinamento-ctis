import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMultaComponent } from './consulta-multa.component';

describe('ConsultaMultaComponent', () => {
  let component: ConsultaMultaComponent;
  let fixture: ComponentFixture<ConsultaMultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaMultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
