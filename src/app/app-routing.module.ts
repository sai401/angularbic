import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './component/template-driven/template-driven.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { TestComponent } from './component/test/test.component';
import { ReactiveDemoComponent } from './component/reactive-demo/reactive-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
  { path: 'templateform', component: TemplateDrivenComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'reactivedemo', component: ReactiveDemoComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
