import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';
import { AwardsComponent } from './awards/awards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'awards', component: AwardsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'publications', component: PublicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
