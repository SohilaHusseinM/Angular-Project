import { Component } from '@angular/core';
import { CustomDirective } from '../../../../Directives/custom.directive';

@Component({
  selector: 'app-about',
  imports: [CustomDirective],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {

}
