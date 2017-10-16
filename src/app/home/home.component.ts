import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SharedialogComponent } from '../shared/sharedialog/sharedialog.component';
import { MatChipInputEvent } from '@angular/material';
import { ENTER } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material';

const COMMA = 188;
// tslint:disable-next-line:max-line-length
const URL_REGEXP = /^((?:http|ftp)s?:\/\/)(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?(?:\/?|[\/?]\S+)$/i;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {

  }
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];
  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];
  public isPasted = false;
  paste() {
    this.isPasted = true;
  }
  onPaste(e: any) {
    let content = e.clipboardData.getData('text/plain');
    if (URL_REGEXP.test(content)) {
      this.isPasted = true;
    } else {
      this.snackBar.open(`Provide valite url`, '', {
        duration: 2000,
      });
    }
  }

  cancel() {
    this.isPasted = false;
  }
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  animal: string;
  name: string;

  openDialog(): void {
    let dialogRef = this.dialog.open(SharedialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


  ngOnInit() {
  }

}
