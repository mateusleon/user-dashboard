import { NgModule } from '@angular/core';
import { UsersCardsItemModule } from '@lastlink/shared';
import { UsersDetailsComponent } from './users-details.component';

@NgModule({
  declarations: [UsersDetailsComponent],
  imports: [UsersCardsItemModule],
  exports: [UsersDetailsComponent, UsersCardsItemModule],
})
export class UsersDetailsModule {}
