import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  isSticky:boolean = false;

  ngOnInit(): void {
    this.stick()
  }
  
  @HostListener('window:scroll', ['$event']) stick(){
    if(window.scrollY > 70){
      this.isSticky = true
    }else{
      this.isSticky = false
    }
  }
}
