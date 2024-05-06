import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';

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
    importProvidersFrom(provideFirestore(() => getFirestore())), provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: ['en', 'de'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      }),
  ],
};
