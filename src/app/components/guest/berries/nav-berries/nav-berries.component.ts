import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-berries',
  templateUrl: './nav-berries.component.html',
  styleUrls: ['../../../../../assets/css/berries-navStyles.css']
})
export class NavBerriesComponent implements OnInit {

  @Input() actualPage: string =''

  isShowMenu: boolean = false 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public showMenu():void 
  {
    this.isShowMenu = !this.isShowMenu  
  }
  gotoCompanies():void
  {
    this.router.navigate(['/'+this.actualPage], { fragment: 'contact' })
    this.isShowMenu = false
  }

}
