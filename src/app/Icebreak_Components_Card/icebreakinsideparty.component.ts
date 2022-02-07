import { Component, OnInit } from "@angular/core";

import { Injectable } from "@angular/core";

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

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 800,
    navText: [
      "<button  type='button' class='btn  nav-button owl-prev'>previous</button>",
      "<button type='button' class='btn  nav-button owl-next'>next</button>",
      /*   "<div id='left' class='nav-button owl-prev'>‹</div>",
      "<div id='right' class='nav-button owl-next'>›</div>", */
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
    nav: true,
  };
  constructor(private ps: ProductionService) {}

  ngOnInit(): void {
    this.files = this.ps.getProducts();
  }
}
