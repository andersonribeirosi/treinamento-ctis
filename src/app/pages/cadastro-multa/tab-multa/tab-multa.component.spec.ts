import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMultaComponent } from './tab-multa.component';

describe('TabMultaComponent', () => {
  let component: TabMultaComponent;
  let fixture: ComponentFixture<TabMultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
