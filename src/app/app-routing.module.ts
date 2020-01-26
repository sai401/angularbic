import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TemplateDrivenComponent } from "./component/template-driven/template-driven.component";
import { ReactiveFormComponent } from "./component/reactive-form/reactive-form.component";
import { TestComponent } from "./component/test/test.component";

const routes: Routes = [
  { path: "test", component: TestComponent },
  { path: "templateform", component: TemplateDrivenComponent },
  { path: "reactiveform", component: ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
