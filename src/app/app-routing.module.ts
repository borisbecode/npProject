import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

import { AuthGuard } from "./services/auth.guard";
import { HomepageComponent } from "./homepage/homepage.component";
import { PartyComponent } from "./Icebreak/party.component";
import { PicturesComponent } from "./Photomaton/pictures.component";
import { DayComponent } from "./day/day.component";
import { HonnorComponent } from "./honnor/honnor.component";
import { InformationComponent } from "./information/information.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "admin",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "party",
    component: PartyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pictures",
    component: PicturesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "day",
    component: DayComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "honnor",
    component: HonnorComponent,
  },
  { path: "information", component: InformationComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "signup", component: SignupComponent },

  { path: "**", component: HomeComponent }, // catch-all in case no other path matched
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
