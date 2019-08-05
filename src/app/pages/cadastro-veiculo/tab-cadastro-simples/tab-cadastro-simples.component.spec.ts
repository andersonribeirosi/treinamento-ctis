import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCadastroSimplesComponent } from './tab-cadastro-simples.component';

describe('TabCadastroSimplesComponent', () => {
  let component: TabCadastroSimplesComponent;
  let fixture: ComponentFixture<TabCadastroSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCadastroSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCadastroSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
