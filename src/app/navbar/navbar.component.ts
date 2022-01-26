import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  user: Observable<any>;
  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.user = null;
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe((user) => {
      // grab the user object from Firebase Authorization
      if (user) {
        let emailLower = user.email.toLowerCase();
        this.user = this.firestore
          .collection("users")
          .doc(emailLower)
          .valueChanges(); // get the user's doc in Cloud Firestore
      }
    });
  }
  logout(): void {
    this.afAuth.signOut();
  }
}
