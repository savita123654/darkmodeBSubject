import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {

  constructor(private appService: AppService) { }

  valueMode: boolean = false;

  ngOnInit() {
    this.appService.behaviourSub.subscribe(res => this.valueMode = res)
  }
}
