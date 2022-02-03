import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductionService {
  constructor(private db: AngularFirestore) {}
  getProducts(): Observable<any[]> {
    return this.db.collection("files").valueChanges();
    /*  return this.db.collection("users").valueChanges(); */
  }
}
