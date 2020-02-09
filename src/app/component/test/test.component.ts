import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  public name: string = "Jhon";
  public url: string = window.location.href;
  public myId = "testId";
  public isDisabled: boolean = true;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  };

  public greeting = "";

  //directives section
  public displayName = false;
  public color = "red";
  public colors = ["red", "blue", "green", "yellow"];
  //end

  //components interaction
  @Input("parentData") public parentName;
  @Output() public childEvent = new EventEmitter<string>();
  public person = {
    firstName: "John",
    lastName: "Doe"
  };

  public date = new Date();
  fireEvent() {
    this.childEvent.emit("Hey Codevolution");
  }

  //end

  constructor() {}

  ngOnInit() {}

  greetUser() {
    return "Hello " + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
  }
}

// selector: ".app-test",
// selector: '[app-test]',

// template: `
// <div class="container">
//   <h2>Card Header and Footer</h2>
//   <div class="card">
//     <div class="card-header">Header</div>
//     <div class="card-body">Content</div>
//     <div class="card-footer">Footer</div>
//   </div>
// </div>
// `,

// styles: [
//   `
//   div{
//     color:red
//   }`
// ]
