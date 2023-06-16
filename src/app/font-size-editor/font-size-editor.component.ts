import { Component } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.scss']
})
export class FontSizeEditorComponent {

  public fontSize: number = 14;

  constructor() {}

  ngOnInit() {
  }

  public changeFontSizeValue(fontSize: any) {
    this.fontSize = fontSize;
  }
}
