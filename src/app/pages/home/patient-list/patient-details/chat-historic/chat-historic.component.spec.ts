import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHistoricComponent } from './chat-historic.component';

describe('ChatHistoricComponent', () => {
  let component: ChatHistoricComponent;
  let fixture: ComponentFixture<ChatHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
