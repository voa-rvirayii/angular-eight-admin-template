import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent],
  imports: [CommonModule, RouterModule],
})
export class DefaultModule {}
