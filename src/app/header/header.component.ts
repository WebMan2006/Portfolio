import { Component, HostListener} from '@angular/core';
import { MainPortComponent } from '../main-port/main-port.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSticky: boolean = false;
  burgermenu: HTMLElement | null = null;
  header: HTMLElement | null = null;
  link2: HTMLElement | null = null;


  constructor(private mainpage: MainPortComponent) {}
  
  ngOnInit(): void {
    
    this.burgermenu = document.querySelector(".menu-toggle");
    this.header = document.querySelector(".header");
    this.link2 = document.querySelector(".nav-links")
    this.stick()
  }
  onClick(){
    this.burgermenu?.classList.toggle("is-active")
    this.header?.classList.toggle("activeheader")
    this.link2?.classList.toggle("flex");
  }

  @HostListener('window:scroll', ['$event'])
  stick(): void {
    this.isSticky = window.scrollY > 70;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}