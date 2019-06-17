import { State } from '@ngxs/store';

export type Theme = 'dark' | 'light';

export interface ThemeStateModel {
  currentTheme: Theme;
}

@State<ThemeStateModel>({
  name: 'theme',
  defaults: {
    currentTheme: 'dark'
  }
})
export class ThemeState {}
