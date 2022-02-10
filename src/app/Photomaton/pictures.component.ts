import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-pictures",
  templateUrl: "./pictures.component.html",
  styleUrls: ["./pictures.component.scss"],
})
export class PicturesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images = [
    "https://zupimages.net/up/22/06/syzy.jpg",
    "https://zupimages.net/up/22/06/px2q.jpg",
    "https://zupimages.net/up/22/06/1q48.jpg",
    "https://zupimages.net/up/22/06/rb92.jpg",
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild("carousel", { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
