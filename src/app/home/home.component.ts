import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  caminhoDoApp: string;

  constructor(private location: Location) {
    this.caminhoDoApp = location.path();
  }

  ngOnInit(): void {}
}
