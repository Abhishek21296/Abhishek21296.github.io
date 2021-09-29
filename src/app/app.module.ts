import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { EngineComponent } from "./engine/engine.component";
import { UiInfobarBottomComponent } from "./ui/ui-infobar-bottom/ui-infobar-bottom.component";
import { UiInfobarTopComponent } from "./ui/ui-infobar-top/ui-infobar-top.component";
import { UiSidebarLeftComponent } from "./ui/ui-sidebar-left/ui-sidebar-left.component";
import { UiSidebarRightComponent } from "./ui/ui-sidebar-right/ui-sidebar-right.component";
import { UiComponent } from "./ui/ui.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "three",
    component: UiComponent,
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    UiComponent,
    UiInfobarBottomComponent,
    UiInfobarTopComponent,
    UiSidebarLeftComponent,
    UiSidebarRightComponent,
    MainComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
