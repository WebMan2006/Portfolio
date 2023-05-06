import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('burger') burger!: ElementRef;
  @ViewChild('links') links!: ElementRef;
  isSticky: boolean = false;
  activeMenu: boolean = false;

  ngOnInit(): void {
    if (this.links.nativeElement.style.display === 'none') {
      this.activeMenu = true;
    }

    if (this.activeMenu) {
      this.burger.nativeElement.style.display = "block";
    }

    this.stick();
  }

  toggleMenu(): void {
    this.burger.nativeElement.classList.toggle('active');
  }

  @HostListener('window:scroll', ['$event'])
  stick(): void {
    this.isSticky = window.scrollY > 70;
  }
}