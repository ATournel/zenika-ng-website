import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { appTitleProvider } from './app.token';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    appTitleProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
