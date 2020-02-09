import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./component/test/test.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateDrivenComponent } from "./component/template-driven/template-driven.component";
import { ReactiveFormComponent } from "./component/reactive-form/reactive-form.component";
import { HttpClientModule } from "@angular/common/http";
import { DemoComponent } from './component/demo/demo.component';
import { ReactiveDemoComponent } from './component/reactive-demo/reactive-demo.component';
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    DemoComponent,
    ReactiveDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
