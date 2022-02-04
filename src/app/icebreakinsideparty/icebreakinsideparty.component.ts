import { Component, OnInit } from "@angular/core";

import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { ProductionService } from "../services/production.service";
import { ViewEncapsulation } from "@angular/core";
import { AccordionModule } from "primeng/accordion";
import { MenuItem } from "primeng/api";

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

  responsiveOptions;

  constructor(private ps: ProductionService) {
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.files = this.ps.getProducts();
  }
}
