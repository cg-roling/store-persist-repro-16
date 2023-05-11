import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersistStateModule } from '@ngrx-addons/persist-state';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

const reducers = {
  demo: (x: any) => x,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    PersistStateModule.forRoot<typeof reducers>({
      states: [],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
