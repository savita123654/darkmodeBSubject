import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  constructor(private appService: AppService) { }

  valueMode: boolean = false;

  ngOnInit() {
    this.appService.behaviourSub.subscribe(res => this.valueMode = res)
  }
}
