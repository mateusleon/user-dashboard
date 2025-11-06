import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplitModule } from '../../pipes';
import { SvgModule } from '../svg';
import { UsersCardsItemComponent } from './users-cards-item.component';

@NgModule({
  declarations: [UsersCardsItemComponent],
  imports: [CommonModule, RouterModule, SplitModule, SvgModule],
  exports: [UsersCardsItemComponent],
})
export class UsersCardsItemModule {}
