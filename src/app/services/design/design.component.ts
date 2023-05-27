import { Component } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {
  faCode = faCode;
  faLightbulb = faLightbulb;
  faPenToSquare = faPenToSquare;
  faAt = faAt;
}
