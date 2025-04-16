import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { Http2SecureServer } from 'http2';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};


export const config = mergeApplicationConfig(appConfig, serverConfig);
