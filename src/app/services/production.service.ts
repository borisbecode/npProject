import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Item } from "./item";

import { AngularFireAuth } from "@angular/fire/compat/auth";

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
  ) {}

  getItems() {
    return this.information;
  }

  getProducts(): Observable<any[]> {
    return this.db.collection("files").valueChanges();
  }
}
