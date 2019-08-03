import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraAquisicaoComponent } from './primeira-aquisicao.component';

describe('PrimeiraAquisicaoComponent', () => {
  let component: PrimeiraAquisicaoComponent;
  let fixture: ComponentFixture<PrimeiraAquisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiraAquisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraAquisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
