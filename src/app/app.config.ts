import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';
import { provideImgixLoader } from '@angular/common';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    provideHttpClient(),
    provideImgixLoader('http://velizar-ganchev.com/'),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp()
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
