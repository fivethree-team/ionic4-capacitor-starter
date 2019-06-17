import { ThemeState, ThemeStateModel } from './theme/theme.state';
import { LanguageState, LanguageStateModel } from './language/language.state';

export interface AppState {
  language: LanguageStateModel;
  theme: ThemeStateModel;
}

export const states = [LanguageState, ThemeState];
