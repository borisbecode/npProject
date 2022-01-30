import { Component, OnInit } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.scss"],
})
export class DayComponent implements OnInit {
  faCoffee = faCoffee;
  constructor() {}

  ngOnInit(): void {}
}
