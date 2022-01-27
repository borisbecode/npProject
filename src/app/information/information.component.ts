import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss", "../home/home.component.scss"],
})
export class InformationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var timer;

    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 198); //just for this demo today + 7 days

    timer = setInterval(function () {
      timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
      var dateEntered = toDate;
      var now = new Date();
      var difference = dateEntered.getTime() - now.getTime();

      if (difference <= 0) {
        // Timer done
        clearInterval(timer);
      } else {
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
      }
    }
  }
}
