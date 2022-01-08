import { Component,Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-panier',
  templateUrl: './dialog-panier.component.html',
  styleUrls: ['./dialog-panier.component.css']
})
export class DialogPanierComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any
    , private matDialogRef: MatDialogRef<DialogPanierComponent>) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.matDialogRef.close();
  }

  fermer() {
    this.matDialogRef.close();
  }
}
