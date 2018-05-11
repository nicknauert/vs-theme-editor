import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementListModule } from './element-list/element-list.module';

import { ControlHandlerService } from './control-handler-service/control-handler.service';
import { ColorPickService } from './element-list/services/color-pick.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ElementListModule,
  ],
  providers: [
    ControlHandlerService,
    ColorPickService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
