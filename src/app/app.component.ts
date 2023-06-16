import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'changeFontSize';
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit() {
  }

  public getCurrentUrl(): string {
    return this.router.url;
  }
}
