import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMultaComponent } from './cadastro-multa.component';

describe('CadastroMultaComponent', () => {
  let component: CadastroMultaComponent;
  let fixture: ComponentFixture<CadastroMultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
