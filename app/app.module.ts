import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import { RenderComponent } from './rendered/render.components';
import { TextboxComponent } from './rendered/controls/textbox.component';
import { DynamicComponent } from './dynamic-view/dynamic.component';
import { DynamicViewComponent } from './dynamic-view/dynamic-view.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents,
    RenderComponent,
    TextboxComponent,
    DynamicComponent,
    DynamicViewComponent
  ],
  entryComponents: [
    TextboxComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
