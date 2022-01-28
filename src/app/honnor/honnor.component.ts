import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-honnor",
  templateUrl: "./honnor.component.html",
  styleUrls: ["./honnor.component.scss"],
})
export class HonnorComponent implements OnInit {
  user: Observable<any>;
  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.user = null;
  }

  ngOnInit(): void {}
}
