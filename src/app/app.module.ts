import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AwardsComponent } from './awards/awards.component';
<<<<<<< HEAD
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { GalleryComponent } from './gallery/gallery.component';
=======
>>>>>>> b8e1b267be629073fe5b37d8221660a51ee97432


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ToolsComponent,
    TopnavComponent,
    AwardsComponent,
<<<<<<< HEAD
    SpinnerComponent,
    GalleryComponent
=======
>>>>>>> b8e1b267be629073fe5b37d8221660a51ee97432
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
