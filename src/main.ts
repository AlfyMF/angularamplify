import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { generateClient } from 'aws-amplify/api';

Amplify.configure(amplifyconfig);
const client = generateClient();

Amplify.configure(amplifyconfig);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

