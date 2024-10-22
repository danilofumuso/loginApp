import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactiveForm',
    loadChildren: () =>
      import('./pages/reactive-form/reactive-form.module').then(
        (m) => m.ReactiveFormModule
      ),
  },
  {
    path: 'templateDrivenForm',
    loadChildren: () =>
      import('./pages/template-driven-form/template-driven-form.module').then(
        (m) => m.TemplateDrivenFormModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
