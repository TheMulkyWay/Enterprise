
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

  public href: string = "";
  showlink: boolean =false;

  constructor(private router: Router) { }


  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    if (this.href.includes('details')) { this.showlink = true;}

  }


  urlhas() { }


}
