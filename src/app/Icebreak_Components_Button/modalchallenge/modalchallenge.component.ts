import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { question } from "src/app/services/question";

import { CountdownModule } from "ngx-countdown";
@Component({
  selector: "app-modalchallenge",
  templateUrl: "./modalchallenge.component.html",
  styleUrls: ["./modalchallenge.component.scss"],

  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modaly .modal-content {
        background-color: #f4f1de;
        color: #3d405b;
        width: auto;
        height: 50vh;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ],
})
export class ModalchallengeComponent implements OnInit {
  files: File[] = [];
  closeResult: string;
  sendpicture: boolean = true;
  loose: boolean = false;
  randomstring: string;

  constructor(private modalService: NgbModal) {}

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: "dark-modaly" });
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      console.log("uploadManager adding file: ", files.item(i));
      this.files.push(files.item(i));
    }
  }
  ngOnInit(): void {}

  timesUp(event) {
    if (event.action == "done") {
      console.log("Finished");
      this.sendpicture = !this.sendpicture;
      this.loose = !this.loose;
    }
  }

  random() {
    var colors = ["red", "blue", "green", "yellow"];
    var randColor = question[Math.floor(Math.random() * question.length)];
    this.randomstring = randColor;
  }

  reset() {
    this.sendpicture = true;
    this.loose = false;
  }
}
