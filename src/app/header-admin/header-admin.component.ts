import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  user:any = sessionStorage.getItem("utilisateur");
  utilisateur = JSON.parse(this.user);
  constructor() { }

  ngOnInit(): void {
  }

}
