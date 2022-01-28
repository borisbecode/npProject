import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Xliff } from "@angular/compiler";

@Component({
  selector: "app-modal-login",
  templateUrl: "./modal-login.component.html",
  styleUrls: ["./modal-login.component.scss"],

  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        /*      background-image: url(../../app/images/pap.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 30%; */
        background-color: black;
      }
    `,
  ],
})
export class ModalLoginComponent implements OnInit {
  isProgressVisible: boolean;
  loginForm: FormGroup;
  firebaseErrorMessage: string;
  ngOnInit(): void {
    if (this.authService.userLoggedIn) {
      // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
      this.router.navigate(["/home"]);
    }
  }

  closeResult: string;

  constructor(
    private _snackBar: MatSnackBar,
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.isProgressVisible = false;

    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
    });

    this.firebaseErrorMessage = "";
  }

  panelOpenState = false;

  openSnackBar(message: "vous etes connectés", action: "close") {
    this._snackBar.open(message, action, { duration: 3500 });
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {
      backdropClass: "light-blue-backdrop",
      centered: true,
    });
  }

  loginUser() {
    this.isProgressVisible = true; // show the progress indicator as we start the Firebase login process

    if (this.loginForm.invalid) return;

    this.authService
      .loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        this.isProgressVisible = false; // no matter what, when the auth service returns, we hide the progress indicator
        if (result == null) {
          // null is success, false means there was an error
          console.log("logging in...");
          this.router.navigate(["/home"]); // when the user is logged in, navigate them to dashboard
        } else if (result.isValid == false) {
          console.log("login error", result);
          this.firebaseErrorMessage = result.message;
        }
      });
  }
}
