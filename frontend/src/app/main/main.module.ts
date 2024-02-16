import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './connect/connect.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'connect', component: ConnectComponent },
  { path: 'register', component: RegsiterComponent },
  { path: '', redirectTo: '/connect', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    ConnectComponent,
    RegsiterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }

