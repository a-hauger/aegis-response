import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageNames: string[] = [
    "Home",
    "About the Company",
    "Instructor Information",
    "Courses",
    "Contact Us",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
