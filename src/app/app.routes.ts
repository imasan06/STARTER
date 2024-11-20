// src/app/app-routing.module.ts
import { Routes, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CrudcomponentComponent } from './crudcomponent/crudcomponent.component'; 
import { RoleGuard } from './guard/role.guard';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'crud', 
    component: CrudcomponentComponent, 
    canActivate: [RoleGuard]
  },
  {path: 'usercrud',
    component:UserComponent,
   
  }
];

// Proveedores necesarios para la configuración de la aplicación

export const APP_PROVIDERS = [
  provideRouter(routes),
  provideHttpClient()
];