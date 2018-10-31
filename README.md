# NgSendgrid


### This library allows you to quickly and easily use the SendGrid Web API v3 via Angular 2,4,6,7.



#### This library represents the beginning of a new path for SendGrid. We want this library to be community driven and SendGrid led. We need your help to realize this goal. To help make sure we are building the right things in the right order, we ask that you create issues and pull requests or simply upvote or comment on existing issues or pull requests.

Please browse the rest of this README for further detail.

We appreciate your continued support, thank you!


___

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://opensource.org/licenses/MIT)[![Build Status](https://travis-ci.org/ajanieniolasolomon/ng-sendgrid.svg?branch=master)](https://travis-ci.org/ajanieniolasolomon/ng-sendgrid)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ajanieniolasolomon/ng-dialogflow/)[![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)]()


 > npm i ngx-sendgrid
  


> yarn install ngx-sendgrid


 # Usage

 ### Import  Main Module

```bash

import { SendgridModule,  SendgridService  } 
from 'ngx-sendgrid';




@NgModule({
 declarations: [
   //....
   ],
  imports: [
   //...
   SendgridModule.forRoot({token:'xxxxxxxxxxx'})
  ],
  })
   ```
  ###  Add to service
   ```bash

import { Injectable } from '@angular/core';
 import { SendgridService } from 'ngx-sendgrid';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 constructor(private service: SendgridService) { }

sendToSingleUser(){
this.service.BasicEmailToSingleUser( to, from, subject, content).subscribe(result=>{
  console.log(result)
})

  }

}




   