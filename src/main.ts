import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);
// Amplify.configure({
//   API: {
//     GraphQL: {
//       endpoint: 'https://xax4l3pbnzh37hdsrfh3miovcy.appsync-api.us-east-1.amazonaws.com/graphql',
//       region: 'us-east-1',
//       defaultAuthMode: 'apiKey',
//       apiKey: 'da2-rky5o*********************'
//     }
//   }
// });
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

