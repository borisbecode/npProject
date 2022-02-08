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
        /*    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),
          url(../../../app/images/cardback.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; */

        color: #3d405b;
        /*   max-width: 32vw;
        max-height: 50vh; */
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
  randomquestion: string;

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
    var randQuest = question[Math.floor(Math.random() * question.length)];
    this.randomquestion = randQuest;
  }

  reset() {
    this.sendpicture = true;
    this.loose = false;
  }
}
