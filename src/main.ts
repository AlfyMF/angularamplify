import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
// import config from '';
import { generateClient } from 'aws-amplify/api';

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
// Amplify.configure({
//   API: {
//     GraphQL: {
//       endpoint: 'https://xax4l3pbnzh37hdsrfh3miovcy.appsync-api.us-east-1.amazonaws.com/graphql',
//       region: 'us-east-1',
//       // Set the default auth mode to "apiKey" and provide the API key value
//       defaultAuthMode: 'apiKey',
//       apiKey: 'da2-rky5okmbb5a7tferchc52gu43a'
//     }
//   }
// });
// const client: any = generateClient();
// client.configure(amplifyconfig);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

