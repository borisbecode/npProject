import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Item } from "./item";

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { data } from "jquery";

@Injectable({
  providedIn: "root",
})
export class ProductionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  information: Observable<any[]>;
  utilisateur: string;
  prenom: string;

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

    /*  this.information = this.afs.collection("users/").valueChanges(); */
  }

  async myFunction() {
    const doc = await this.afs
      .doc(`users/${this.utilisateur}`)
      .get()
      .toPromise();

    if (doc.exists) {
      console.log("The doc exists!");
      const datas = doc.data();
      console.log(datas);
      return datas;
      //
      //
    } else {
      console.log("No doc data");
    }
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
