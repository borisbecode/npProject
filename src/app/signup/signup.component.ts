import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { text } from "@fortawesome/fontawesome-svg-core";
import { ElementRef, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  @ViewChild("nom", { static: true }) usernameElement: ElementRef;
  @ViewChild("prenom", { static: true }) usernameElementbis: ElementRef;
  myusername: string = "";

  isProgressVisible: boolean;
  signupForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(
    private _snackBar: MatSnackBar,
    usernameElementbis: ElementRef,
    usernameElement: ElementRef,
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.isProgressVisible = false;
    this.firebaseErrorMessage = "";
    this.usernameElement = usernameElement;
    this.usernameElementbis = usernameElementbis;
  }

  clickme() {
    this.myusername =
      this.usernameElement.nativeElement.value +
      this.usernameElementbis.nativeElement.value;
  }

  openSnackBar(message: string, action: "close") {
    this._snackBar.open(message, action, { duration: 3500 });
  }

  ngOnInit(): void {
    /*  if (this.authService.userLoggedIn) {
      // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
      this.router.navigate(['/dashboard']);
    } */

    this.signupForm = new FormGroup({
      nom: new FormControl("", Validators.required),
      prenom: new FormControl("", Validators.required),

      niveau: new FormControl("", Validators.required),

      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  onKeyDownEvent(event: any) {
    console.log(event.target.value);
  }
  signup() {
    if (this.signupForm.invalid)
      // if there's an error in the form, don't submit it
      return;

    this.isProgressVisible = true;
    this.authService
      .signupUser(this.signupForm.value)

      .then((result) => {
        if (result == null) {
          this.afAuth.signOut();

          this.authService
            .loginUser("adminboris@gmail.com", "adminAdmin_Boris")
            .then((result) => {
              this.isProgressVisible = false; // no matter what, when the auth service returns, we hide the progress indicator
              if (result == null) {
                // null is success, false means there was an error
                this.openSnackBar("invit?? enregistr??", "close");

                this.router.navigate(["/admin"]); // when the user is logged in, navigate them to dashboard
              } else if (result.isValid == false) {
                this.openSnackBar("erreur admin", "close");
                console.log("login error", result);
                this.firebaseErrorMessage = result.message;
              }
            });
        }

        if (result.isValid == false)
          // null is success, false means there was an error

          this.firebaseErrorMessage = result.message;

        this.isProgressVisible = false; // no matter what, when the auth service returns, we hide the progress indicator
      })

      .catch(() => {
        this.isProgressVisible = false;
      });
  }
}
