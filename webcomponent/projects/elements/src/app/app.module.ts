import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ComponentsModule, ComponentsComponent } from 'components';
import { ComponentstwoModule, ComponentstwoComponent } from 'componentstwo';

@NgModule({
  imports: [BrowserModule, ComponentsModule, ComponentstwoModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(ComponentsComponent, {
      injector: this.injector,
    });
    if (!customElements.get('woolworth-tile'))
      customElements.define('woolworth-tile', element);

    const elementtwo = createCustomElement(ComponentstwoComponent, {
      injector: this.injector,
    });
    if (!customElements.get('woolworth-header'))
      customElements.define('woolworth-header', elementtwo);
  }
}
