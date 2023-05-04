import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isload: boolean = true;

  
  ngOnInit(): void {
    this.loading();
  }
  
  loading() {
    setTimeout(() => {
      this.isload = false;
    }, 1000);
  }
}
