//Sentry
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import * as Sentry from "@sentry/angular";
import { Integrations } from "@sentry/tracing";

import { AppModule } from '../app/app.module';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



//enableProdMode();
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then(success => console.log(`Bootstrap success`))
//   .catch(err => console.error(err));


export class AppComponent {
  constructor() {


Sentry.init({
  dsn: 'https://45d4de1958e042f7bd1870a052c4a5ae@o292934.ingest.sentry.io/6025542',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['localhost', 'https://edengym-7b791.web.app'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

  }
}
