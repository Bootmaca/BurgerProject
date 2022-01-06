import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-entete-client',
  templateUrl: './entete-client.component.html',
  styleUrls: ['./entete-client.component.css']
})
export class EnteteClientComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("FRENCH BURGER");
  }

  ngOnInit(): void {
  }

}
