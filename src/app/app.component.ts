import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

/** @title drawer with custom escape and backdrop click behavior */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  title = 'learnNgMat';
  showFiller = true;

  ngOnInit() {
    this.drawer.open();
  }

}
