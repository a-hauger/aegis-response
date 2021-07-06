import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

type Page = {
  name: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pages: Page[] = [
    {name: "Home", link: "home"},
    {name: "About the Company", link: "about"},
    {name: "Instructor Information", link: "instructor"},
    {name: "Courses", link: "courses"},
    {name: "Contact Us", link: "contact"},
    {name: "Sign Up", link: "signup"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
