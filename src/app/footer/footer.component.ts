import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  isload = true


  ngOnInit():void{
    setTimeout(()=>{
      this.isload = false
    }, 2000)
  }
}
