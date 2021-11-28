import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    const bundles = ['elements'];

    bundles.forEach((name) =>
      document.body.appendChild(this.getScriptTag(name))
    );
  }

  getScriptTag(fileName: string): HTMLElement {
    const scriptTag = document.createElement(`script`);

    scriptTag.setAttribute('src', `assets/ng-elements/${fileName}.js`);
    scriptTag.setAttribute('type', 'text/javascript');

    return scriptTag;
  }
}
