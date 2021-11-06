import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { NavigationAdminComponent } from './shared/navigation-admin/navigation-admin.component';
import { SidenavListAdminComponent } from './shared/sidenav-list-admin/sidenav-list-admin.component';
import {MaterialModule} from "../modules/material/material.module";
import { QuillModule } from 'ngx-quill';
import { DropZoneComponent } from './shared/drop-zone/drop-zone.component';
import { ImageUploaderComponent } from './shared/image-uploader/image-uploader.component'

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    RecipePageComponent,
    NavigationAdminComponent,
    SidenavListAdminComponent,
    DropZoneComponent,
    ImageUploaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent}
        ]
      }
    ]),
  ],
  exports: [
    RouterModule,
    QuillModule,
    DropZoneComponent
  ],

})
export class AdminModule {

}
