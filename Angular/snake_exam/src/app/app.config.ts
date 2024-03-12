import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SnakeIntroPageComponent } from './snake-intro-page/snake-intro-page.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: 'intro-page',
        component: SnakeIntroPageComponent,
      },
      {
        path: 'game-page',
        component: SnakeGameComponent,
      },
      {
        path: '**',
        redirectTo: 'intro-page',
      },
    ]),
  ],
};
