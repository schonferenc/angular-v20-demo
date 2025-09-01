import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { LangSwitcher } from './lang-switcher/lang-switcher';


@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslocoDirective, LangSwitcher],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
