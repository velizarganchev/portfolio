import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'portfolio-e4994',
          appId: '1:1069471818613:web:ca8e3950ed87b8d03ca93c',
          storageBucket: 'portfolio-e4994.appspot.com',
          apiKey: 'AIzaSyDtYR5oui5BNJ4kD4akA8O_5YnOyiXuyWE',
          authDomain: 'portfolio-e4994.firebaseapp.com',
          messagingSenderId: '1069471818613',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
