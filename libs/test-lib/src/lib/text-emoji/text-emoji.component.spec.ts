import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEmojiComponent } from './text-emoji.component';

describe('TextEmojiComponent', () => {
  let component: TextEmojiComponent;
  let fixture: ComponentFixture<TextEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
