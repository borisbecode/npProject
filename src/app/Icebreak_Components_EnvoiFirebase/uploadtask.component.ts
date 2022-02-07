import { Component, OnInit, Input } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from "@angular/fire/compat/storage";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

import { getDatabase } from "firebase/database";
import { AngularFireAuth } from "@angular/fire/compat/auth";

import { ProductionService } from "../services/production.service";
import { MatSnackBar } from "@angular/material/snack-bar";

import { usermail } from "../services/userinformation";
import { email } from "../services/userinformation";

@Component({
  selector: "app-uploadtask",
  templateUrl: "./uploadtask.component.html",
  styleUrls: ["./uploadtask.component.scss"],
})
export class UploadtaskComponent implements OnInit {
  @Input() file: File;
  task: AngularFireUploadTask; // this does the uploading for us

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  email: email[] | string;
  prenom: string;
  nom: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private _snackBar: MatSnackBar,
    private afs: AngularFirestore,
    private ps: ProductionService
  ) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe(async (user) => {
      if (user) {
        this.email = user.email;

        this.Userinformation();
      }
    });
    this.startUpload();
  }

  async Userinformation() {
    const doc = await this.afs
      .doc<usermail>(`users/${this.email}`)
      .get()
      .toPromise();

    if (doc.exists) {
      console.log("The doc exists!");
      const data = doc.data();
      this.prenom = data.prenom;
      this.nom = data.nom;

      //
      //
    } else {
      console.log("No doc data");
    }
  }

  openSnackBar(message: string, action: "close") {
    this._snackBar.open(message, action, { duration: 3500 });
  }

  startUpload() {
    console.log("uploading file", this.file);

    let safeName = this.file.name.replace(/([^a-z0-9.]+)/gi, ""); // file name stripped of spaces and special chars
    let timestamp = Date.now(); // ex: '1598066351161'
    const uniqueSafeName = timestamp + "_" + safeName;
    const path = "uploads/" + uniqueSafeName; // Firebase storage path
    const ref = this.storage.ref(path); // reference to storage bucket

    this.task = this.storage.upload(path, this.file);
    this.percentage = this.task.percentageChanges(); // progress monitoring
    this.snapshot = this.task.snapshotChanges().pipe(
      // emits a snapshot of the transfer progress every few hundred milliseconds
      tap(console.log),
      finalize(async () => {
        // after the observable completes, get the file's download URL
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db
          .collection("files")
          .doc(uniqueSafeName)
          .set({
            storagePath: path,
            downloadURL: this.downloadURL,
            originalName: this.file.name,
            timestamp: timestamp,
            posted: this.prenom + " " + this.nom,
          })

          .then(function () {
            console.log("document written!");
            this.openSnackBar("Fichier Envoyé ! ", "close");
          })
          .catch(function (error) {
            console.error("Error writing document:", error);
          });
      })
    );
  }

  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
