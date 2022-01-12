import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumbotronComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
}
