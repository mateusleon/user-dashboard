import { NgModule } from '@angular/core';
import { UsersCardsModule, SearchModule } from '@lastlink/shared';
import { UsersListComponent } from './users-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, UsersCardsModule, SearchModule],
  exports: [UsersListComponent, UsersCardsModule],
})
export class UsersListModule {}
