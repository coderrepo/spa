import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CareerComponent } from './career/career.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCheckboxModule } from '@angular/material';
import { MatProgressBarModule, MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule, MatFormFieldModule, MatDialogModule, MatButtonToggleModule, MatTooltipModule, MatInputModule, MatListModule, MatTabsModule, MatChipsModule, MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { SharedialogComponent } from './shared/sharedialog/sharedialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { JobpartialComponent } from './shared/jobpartial/jobpartial.component';
import { SubscribeComponent } from './shared/subscribe/subscribe.component';
import { AppcommonComponent } from './shared/appcommon/appcommon.component';
import { HttpModule } from '@angular/http';

const MAINMENU_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
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
    JobpartialComponent,
    SubscribeComponent,
    AppcommonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CONST_ROUTING,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
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
    MatFormFieldModule,
    MatSnackBarModule,
    HttpModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  entryComponents: [SharedialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
