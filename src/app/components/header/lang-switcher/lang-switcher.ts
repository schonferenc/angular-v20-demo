import { Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.html',
  standalone: true,
  styleUrl: './lang-switcher.scss'
})
export class LangSwitcher {
 private transloco = inject(TranslocoService);

  // Elérhető nyelvek
  langs = ['en', 'hu'];

  // Jelenlegi nyelv
  get currentLang() {
    return this.transloco.getActiveLang();
  }

  // Nyelv váltása
  changeLang(lang: string) {
    this.transloco.setActiveLang(lang);
  }
}
