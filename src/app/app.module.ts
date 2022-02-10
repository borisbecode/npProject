import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatNativeDateModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "../environments/environment";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DayComponent } from "./day/day.component";
import { InformationComponent } from "./information/information.component";
import { HonnorComponent } from "./honnor/honnor.component";
import { PartyComponent } from "./Icebreak/party.component";
import { PicturesComponent } from "./Photomaton/pictures.component";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { ModalLoginComponent } from "./modal-login/modal-login.component";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { UploadmanagerComponent } from "./Icebreak_Components_Button/uploadmanager.component";
import { UploadtaskComponent } from "./Icebreak_Components_EnvoiFirebase/uploadtask.component";
import { DropzoneDirective } from "./directives/dropzone.directive";

import { IcebreakinsidepartyComponent } from "./Icebreak_Components_Card/icebreakinsideparty.component";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CountdownModule } from "ngx-countdown";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ModalchallengeComponent } from "./Icebreak_Components_Button/modalchallenge/modalchallenge.component";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LeChoixDesButtonsComponent } from "./Icebreak_Components_Button/le-choix-des-buttons/le-choix-des-buttons.component";
// For MDB Angular Free
import { MDBBootstrapModule } from "angular-bootstrap-md";
import {
  CarouselModule as boriscarrousel,
  WavesModule,
} from "angular-bootstrap-md";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,

    DashboardComponent,
    AdminDashboardComponent,
    HomepageComponent,
    NavbarComponent,
    DayComponent,
    InformationComponent,
    HonnorComponent,
    PartyComponent,
    PicturesComponent,
    ModalLoginComponent,
    UploadmanagerComponent,
    UploadtaskComponent,
    DropzoneDirective,

    IcebreakinsidepartyComponent,
    ModalchallengeComponent,
    LeChoixDesButtonsComponent,
  ],
  imports: [
    NgxPageScrollCoreModule.forRoot({
      duration: 1500,
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    CarouselModule,
    CountdownModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    ModalLoginComponent,
    LoginComponent,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  faCoffee = faCoffee;
}
