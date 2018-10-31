import { Component } from '@angular/core';
import { SendgridService } from '../../projects/sendgrid/src/lib/sendgrid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public service: SendgridService) {




//      this.service.sendMessage('ndubuisi.michael@gmail.com','eniolsolomon@gmail.com','goodbye message','would miss my oracle student')
//  .subscribe(res => {
//    console.log(res);
//  });
  }
  title = 'ng-sendgrid';
}
