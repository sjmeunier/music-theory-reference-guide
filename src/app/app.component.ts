import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Music Theory Reference Guide';

  constructor(private router: Router) { }

  public navRoutes: any[] = [
    { route: '/home', text: 'Home'},
    { route: '/intervals', text: 'Intervals'},
    { route: '/scales', text: 'Scales'},
    { route: '/chords', text: 'Chords'},
    { route: '/scale-chords', text: 'Scale Chords'},
    { route: '/circle-of-fifths', text: 'Circle of Fifths'},
    { route: '/terminology', text: 'Terminology'},
    { route: '/sheet-music', text: 'Sheet Music'},
    { route: '/piano', text: 'Piano'},
  ]
  public getRoute = function() {
    return this.router.url;
  }

  public toggleNavbar = function() {
    let navbar = document.getElementById("navbar");
    if (navbar.style.display === "none") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }
}
