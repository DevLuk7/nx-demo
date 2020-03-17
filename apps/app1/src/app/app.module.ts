import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { TestLibModule } from '@nx-demo/test-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    TestLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
