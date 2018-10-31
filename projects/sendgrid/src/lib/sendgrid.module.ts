import { NgModule,  ModuleWithProviders } from '@angular/core';
import { SendgridComponent } from './sendgrid.component';
import { HttpClientModule} from '@angular/common/http';
import { SendgridService } from './sendgrid.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [SendgridComponent],
  exports: [SendgridComponent]
})
export class SendgridModule {
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule : SendgridModule,
      providers: [
        SendgridService,
        {provide : 'config', useValue: config}
      ]
    };
      }
 }
