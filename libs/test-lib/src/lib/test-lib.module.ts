import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEmojiComponent } from './text-emoji/text-emoji.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TextEmojiComponent],
  exports: [TextEmojiComponent]
})
export class TestLibModule {}
