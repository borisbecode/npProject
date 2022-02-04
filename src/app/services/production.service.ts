import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Item } from "./item";
import { switchMap } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {
  AngularFireDatabase,
  AngularFireList,
} from "@angular/fire/compat/database";
import { DocumentReference } from "firebase/firestore";

@Injectable({
  providedIn: "root",
})
export class ProductionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  information: Observable<any[]>;
  utilisateur: string;
  coucou: Observable<any>;
  courses: Observable<any[]>;

  constructor(
    private db: AngularFirestore,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(async (user) => {
      if (user) {
        this.utilisateur = user.email;

        console.log(user);
        console.log(this.utilisateur);
      }
    });

    this.information = this.afs.collection("users/").valueChanges();
  }

  getItems() {
    return this.information;
  }

  getProducts(): Observable<any[]> {
    return this.db.collection("files").valueChanges();
  }

  getProductsUser(): Observable<any[]> {
    return this.db.collection("users").valueChanges();
  }
}
