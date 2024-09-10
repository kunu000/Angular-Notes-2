import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home1', pathMatch: 'full' },
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', redirectTo: 'hom1', pathMatch: 'full' },
      { path: 'home1', component: HomeComponent }, // explain about behaviour subject
      { path: 'home2', component: Home2Component }, // explain about behaviour subject
      { path: 'c1', component: Component1Component }, // explain about signals(writable and readable)
      { path: 'c2', component: Component2Component }, // explain about signals(writable and readable)
    ],
  },
];
