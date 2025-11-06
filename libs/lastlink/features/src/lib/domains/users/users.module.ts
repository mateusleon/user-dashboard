import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEffects, usersApiReducer } from '@lastlink/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const USERS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: UsersListComponent,
  },
  {
    path: 'details/:id',
    component: UsersDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(USERS_ROUTES),
    StoreModule.forFeature('users', usersApiReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  exports: [RouterModule],
})
export class UsersModule {}
