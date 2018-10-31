import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SendgridModule } from '../../projects/sendgrid/src/lib/sendgrid.module';
import { SendgridService } from '../../projects/sendgrid/src/lib/sendgrid.service';

import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SendgridModule.forRoot({token: 'XXXXXXXXXX'})
  ],
  providers: [SendgridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
