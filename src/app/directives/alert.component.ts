/**
 * Created by alica on 2017-02-14.
 */
import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/index';

@Component({
  moduleId: module.id,
  selector: 'alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent {
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { this.message = message; });
  }
}
