import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CareerComponent } from './career/career.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule,MatDialogModule,MatButtonToggleModule,MatTooltipModule,MatInputModule,MatListModule, MatTabsModule,MatChipsModule,MatCardModule,MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { SharedialogComponent } from './shared/sharedialog/sharedialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { JobpartialComponent } from './shared/jobpartial/jobpartial.component';

const MAINMENU_ROUTES: Routes = [
  { path: '', component:HomeComponent, pathMatch: 'full' },
  { path: 'career', component: CareerComponent },
  { path: 'register', component: RegisterComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);

@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    MenuComponent,
    HomeComponent,
    SharedialogComponent,
    RegisterComponent,
    JobpartialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CONST_ROUTING,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  entryComponents: [SharedialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
