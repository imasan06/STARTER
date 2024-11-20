// src/main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_PROVIDERS } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [APP_PROVIDERS]
}).catch(err => console.error(err));