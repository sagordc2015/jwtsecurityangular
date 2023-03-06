import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { RouteGuardService } from './services/route-guard.service';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntersepterBasicAuthService } from './services/http-intersepter-basic-auth.service';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [RouteGuardService]
  },
  {
    path: 'profile',
    component: DashboardComponent,
    canActivate: [RouteGuardService]
  },

  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntersepterBasicAuthService,
      multi: true,
    },
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule]
})
export class AppRoutingModule { }
