import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TSvgValues } from '../../../../../core/src/lib/types';

@Component({
  selector: 'll-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgComponent implements OnChanges {
  // PROPS
  defaultSvg: TSvgValues = 'image-placeholder';

  // INPUTS
  @Input() name: TSvgValues = this.defaultSvg;

  // PROPS
  src = this.#buildSrc();

  // LIFECYCLE
  ngOnChanges(changes: SimpleChanges) {
    this.name = changes['name'].currentValue ?? this.defaultSvg;
    this.src = this.#buildSrc();
  }

  // PRIVATES
  #buildSrc(): string {
    return `./assets/lastlink/core/svg/${this.name}.svg`;
  }
}
