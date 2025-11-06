import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DOMAINS, IUser, KEYS, TSvgValues } from '@lastlink/core';
import { Observable } from 'rxjs';
import { CommonService } from '../../services';

@Component({
  selector: 'll-users-cards-item',
  templateUrl: './users-cards-item.component.html',
  styleUrls: ['./users-cards-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersCardsItemComponent {
  // INPUTS
  @Input() item$!: Observable<IUser | null>;
  @Input() details = false;
  @Input() isSingle = false;

  // PROPS
  DOMAINS = DOMAINS;
  K = KEYS;
  svgAvatarPlaceholder: TSvgValues = 'avatar-placeholder';

  // READONLY
  readonly isLoading = CommonService.isLoading;
}
