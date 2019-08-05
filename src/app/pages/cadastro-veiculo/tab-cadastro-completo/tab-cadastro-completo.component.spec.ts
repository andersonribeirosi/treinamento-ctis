import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCadastroCompletoComponent } from './tab-cadastro-completo.component';

describe('TabCadastroCompletoComponent', () => {
  let component: TabCadastroCompletoComponent;
  let fixture: ComponentFixture<TabCadastroCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCadastroCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCadastroCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
