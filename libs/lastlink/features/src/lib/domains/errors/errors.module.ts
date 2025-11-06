import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsDetailsComponent } from './errors-details/errors-details.component';

const ERRORS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'details/page-not-found',
  },
  {
    path: 'details/:id',
    component: ErrorsDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ERRORS_ROUTES)],
  exports: [RouterModule],
})
export class ErrorsModule {}
