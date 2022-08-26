import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-nursery',
  templateUrl: './navbar-nursery.component.html',
  styleUrls: ['../../../../../../assets/css/nursery-navbarStyles.css']
})
export class NavbarNurseryComponent implements OnInit {
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
