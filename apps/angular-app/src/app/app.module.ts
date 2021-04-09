import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ViewFilesComponent } from './view-files/view-files.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Route, RouterModule } from '@angular/router';
import { HealthCheckComponent } from './health-check/health-check.component';

const routes: Route[] = [
  { path: 'view-files', component: ViewFilesComponent },
  { path: 'objective-one', component: ViewFilesComponent },
  { path: 'health-check', component: HealthCheckComponent },
  { path: 'objective-two', component: HealthCheckComponent },
];
@NgModule({
  declarations: [AppComponent, ViewFilesComponent, HealthCheckComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
