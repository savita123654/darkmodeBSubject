import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {


  constructor(private appService: AppService) { }

  valueMode: boolean = false;

  toggleMode(event: Event) {
    this.valueMode = !this.valueMode;
    this.appService.updateMode(this.valueMode)
  }

  ngOnInit() {

  }
}
