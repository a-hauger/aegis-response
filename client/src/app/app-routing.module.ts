import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPageComponent } from './company-page/company-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructorPageComponent } from './instructor-page/instructor-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: CompanyPageComponent},
  { path: 'instructor', component: InstructorPageComponent },
  { path: 'courses', component: CoursesPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
