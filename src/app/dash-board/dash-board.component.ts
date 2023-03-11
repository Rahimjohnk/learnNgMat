import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  title = 'learnNgMat';
  showFiller = true;

  ngOnInit() {
    this.drawer.open();
  }
  toggle() {
    this.drawer.toggle();
  }
}
