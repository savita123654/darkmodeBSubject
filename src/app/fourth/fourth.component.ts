import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent {

  constructor(private appService: AppService) { }

  valueMode: boolean = false;

  ngOnInit() {
    this.appService.behaviourSub.subscribe(res => this.valueMode = res)
  }
}
