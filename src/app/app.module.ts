import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlarmModule } from './alarm/alarm.module';
import { CameraModule } from './camera/camera.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // system modules
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    
    AlarmModule,
    CameraModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
