import { AnimationDriver } from "@angular/animations/browser";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";

import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userLoggedIn: boolean; // other components can check on this variable for the login status of the user

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.userLoggedIn = false;

    this.afAuth.onAuthStateChanged((user) => {
      // set up a subscription to always know the login status of the user
      if (user) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Auth Service: loginUser: success");
        // this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.log("Auth Service: login error...");
        console.log("error code", error.code);
        console.log("error", error);
        if (error.code) return { isValid: false, message: error.message };
      });
  }

  async signupUser(user: any): Promise<any> {
    try {
      user.password = user.nom + user.prenom;
      await this.afAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      let emailLower = user.email.toLowerCase();

      this.afs
        .doc("/users/" + emailLower) // on a successful signup, create a document in 'users' collection with the new user's info
        .set({
          accountType: user.niveau,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          email_lower: emailLower,
          niveau: user.niveau,
          password: user.password,
        });
    } catch (error) {
      console.log("Auth Service: signup error", error);
      if (error.code) return { isValid: false, message: error.message };
    }
  }

  logoutUser(): Promise<void> {
    return this.afAuth
      .signOut()
      .then(() => {
        this.router.navigate(["/home"]); // when we log the user out, navigate them to home
      })
      .catch((error) => {
        console.log("Auth Service: logout error...");
        console.log("error code", error.code);
        console.log("error", error);
        if (error.code) return error;
      });
  }

  setUserInfo(payload: object) {
    console.log("Auth Service: saving user info...");
    this.afs
      .collection("users")
      .add(payload)
      .then(function (res) {
        console.log("Auth Service: setUserInfo response...");
        console.log(res);
      });
  }

  getCurrentUser() {
    return this.afAuth.currentUser; // returns user object for logged-in users, otherwise returns null
  }
}
