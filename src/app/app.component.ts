import { Component } from "@angular/core";
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { PageScrollService } from "ngx-page-scroll-core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  active = 1;
  title = "tutoyoutube";
  constructor(
    private pageScrollServ: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  onScroll(event: HTMLElement, i) {
    this.pageScrollServ.scroll({
      scrollTarget: event,
      document: this.document,
    });

    this.active = i;
  }
}
