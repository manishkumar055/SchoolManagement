import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { routes } from './app.routes';
import { HttpInterceptService } from './interceptor/http-intercept-service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    // Global error handling
    provideBrowserGlobalErrorListeners(),

    // Router
    provideRouter(routes),

    // Service Worker for PWA
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),

    // Angular Animations
    // provideAnimations(),

    // HTTP Interceptor globally
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptService, multi: true },

    // JWT Service
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: { tokenGetter: () => localStorage.getItem('token') } },

    // Angular Material Dialog defaults
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }, provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
  ]
};
