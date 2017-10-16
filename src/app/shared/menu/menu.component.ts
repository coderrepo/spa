import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SharedialogComponent } from '../sharedialog/sharedialog.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }
  animal: string;
  name: string;

  openDialog(): void {
    let dialogRef = this.dialog.open(SharedialogComponent, {
      width: '600px',
      data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
  }

}
