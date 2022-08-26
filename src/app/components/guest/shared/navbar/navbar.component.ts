import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{
  public isShowMenu: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void 
  {

  }
  public showMenu():void
  {
    this.isShowMenu = !this.isShowMenu
  }
  public gotoCompanies():void 
  {
    this.router.navigate(['/home'], { fragment: 'companies' })
    this.isShowMenu = false
  }

}
