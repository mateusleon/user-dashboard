import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OfModule } from '../../pipes';
import { UsersCardsItemModule } from '../users-cards-item';
import { UsersCardsComponent } from './users-cards.component';

@NgModule({
  declarations: [UsersCardsComponent],
  imports: [CommonModule, UsersCardsItemModule, OfModule],
  exports: [UsersCardsComponent, UsersCardsItemModule],
})
export class UsersCardsModule {}
