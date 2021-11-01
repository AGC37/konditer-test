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
import { ImageUploaderComponent } from './shared/image-uploader/image-uploader.component';
import { CustomInputComponent } from './shared/custom-input/custom-input.component'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListComponent } from './shared/list/list.component';
import {AppModule} from "../app.module";
import {PostComponent} from "../shared/components/post/post.component";
import {CreatePageComponent} from "./create-page/create-page.component";
import {EditPageComponent} from "./edit-page/edit-page.component";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    RecipePageComponent,
    NavigationAdminComponent,
    SidenavListAdminComponent,
    ImageUploaderComponent,
    CustomInputComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          // {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: '', component: DashboardPageComponent},
          {path: 'create', component: CreatePageComponent},
          {path: 'post/:id/edit', component: EditPageComponent}
        ]
      }
    ]),
    // AppModule,
  ],
  exports: [
    RouterModule,
    QuillModule,
    CustomInputComponent,
    ImageUploaderComponent
  ],

})
export class AdminModule {

}
