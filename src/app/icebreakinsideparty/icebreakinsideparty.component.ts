import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import * as firebase from "firebase/compat";
import { doc, getDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
} from "@angular/fire/compat/database";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductionService } from "../services/production.service";
@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-icebreakinsideparty",
  templateUrl: "./icebreakinsideparty.component.html",
  styleUrls: ["./icebreakinsideparty.component.scss"],
})
export class IcebreakinsidepartyComponent implements OnInit {
  files: Observable<any[]>;
  constructor(private ps: ProductionService) {}
  ngOnInit(): void {
    this.files = this.ps.getProducts();
  }
}
