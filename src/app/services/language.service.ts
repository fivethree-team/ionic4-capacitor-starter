import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@environments/environment';
import { Language } from '@store/language/language.state';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  initializeLanguage(language?: Language) {
    this.translate.addLangs(environment.languages.support);
    this.translate.setDefaultLang(environment.languages.default);

    this.useLanguage(
      language ? language : <Language>environment.languages.default
    );
  }

  getBrowserLanguage(): Language {
    const browserLang = this.translate.getBrowserLang();

    const language = browserLang.match(environment.languages.support.join('|'))
      ? browserLang
      : environment.languages.default;

    return <Language>language;
  }

  useLanguage(language: Language) {
    this.translate.use(language);
  }
}
