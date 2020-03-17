import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nx-demo-text-emoji',
  templateUrl: './text-emoji.component.html',
  styleUrls: ['./text-emoji.component.css']
})
export class TextEmojiComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
