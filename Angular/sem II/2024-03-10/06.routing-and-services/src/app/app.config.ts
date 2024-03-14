import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: 'age-verification',
        component: AgeVerificationComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
    ]),
    importProvidersFrom(HttpClientModule),
  ],
};
