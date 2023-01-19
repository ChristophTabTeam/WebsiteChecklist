import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'website-checklist';

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }
}
