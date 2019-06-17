import { State, Selector, Action, StateContext, NgxsOnInit } from '@ngxs/store';
import { ChangeLanguage } from './language.actions';
import { LanguageService } from '@services/language.service';

export type Language = 'de' | 'en';

export interface LanguageStateModel {
  currentLanguage?: Language;
  availableLanguages: { [key in Language]: Language };
}

@State<LanguageStateModel>({
  name: 'language',
  defaults: {
    availableLanguages: {
      de: 'en',
      en: 'de'
    }
  }
})
export class LanguageState implements NgxsOnInit {
  @Selector()
  static language(state: LanguageStateModel) {
    return state.currentLanguage;
  }

  constructor(private languageService: LanguageService) {}

  ngxsOnInit(ctx: StateContext<LanguageStateModel>) {
    const language = ctx.getState().currentLanguage;
    this.languageService.initializeLanguage(language);

    if (!language) {
      const browserLanguage = this.languageService.getBrowserLanguage();
      ctx.dispatch(new ChangeLanguage(browserLanguage));
    }
  }

  @Action(ChangeLanguage)
  changeLanguage(
    ctx: StateContext<LanguageStateModel>,
    action: ChangeLanguage
  ) {
    const prev = ctx.getState().currentLanguage;
    const next = action.next || ctx.getState().availableLanguages[prev];
    this.languageService.useLanguage(next);
    ctx.patchState({ currentLanguage: next });
  }
}
