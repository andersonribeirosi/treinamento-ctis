import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sidebar: boolean;

  constructor(
    private router: Router
    // private rest: RestService
  ) { }

  ngOnInit() {
  }

  // logOut() {
  //   this.rest.logout();
  // }

  open() {
    if (this.sidebar) {
      document.getElementById("mySidebar").style.display = "none";
      this.sidebar = false;
    } else {
      document.getElementById("mySidebar").style.display = "block";
      this.sidebar = true;
    }
  }

}
