import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InstructorPageComponent } from './instructor-page/instructor-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InstructorPageComponent,
    HomePageComponent,
    CompanyPageComponent,
    CoursesPageComponent,
    ContactPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
