import { Component, OnInit } from "@angular/core";

import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { ProductionService } from "../services/production.service";
import { AuthService } from "../services/auth.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
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
