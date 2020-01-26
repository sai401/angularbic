import { Component, OnInit } from "@angular/core";
import { User } from "src/app/user";
import { EnrollmentService } from "src/app/enrollment.service";

@Component({
  selector: "app-template-driven",
  templateUrl: "./template-driven.component.html",
  styleUrls: ["./template-driven.component.scss"]
})
export class TemplateDrivenComponent implements OnInit {
  title = "app";
  topics = ["Angular", "React", "Vue"];
  userModel = new User(
    "Rob",
    "rob@test.com",
    5556665566,
    "default",
    "morning",
    true
  );
  topicHasError = true;
  submitted = false;
  errorMsg = "";

  constructor(private _enrollmentService: EnrollmentService) {}

  ngOnInit() {}

  validateTopic(value) {
    if (value === "default") {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    alert("Success!");
    // this._enrollmentService.enroll(this.userModel).subscribe(
    //   response => console.log("Success!", response),
    //   error => (this.errorMsg = error.statusText)
    // );
  }
}
