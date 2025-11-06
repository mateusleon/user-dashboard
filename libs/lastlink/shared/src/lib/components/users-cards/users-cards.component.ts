import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser, KEYS } from '@lastlink/core';
import { Observable } from 'rxjs';
import { CommonService } from '../../services';

@Component({
  selector: 'll-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersCardsComponent {
  // INPUTS
  @Input() items$!: Observable<IUser[]>;

  // PROPS
  K = KEYS;

  // READONLY
  readonly isLoading = CommonService.isLoading;
}
