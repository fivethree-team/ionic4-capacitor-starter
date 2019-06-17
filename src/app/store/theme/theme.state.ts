import { State, Selector, Action, StateContext } from '@ngxs/store';
import { ChangeTheme } from './theme.actions';

export type Theme = 'dark' | 'light';

export interface ThemeStateModel {
  currentTheme: Theme;
  availableThemes: { [key in Theme]: Theme };
}

@State<ThemeStateModel>({
  name: 'theme',
  defaults: {
    currentTheme: 'dark',
    availableThemes: {
      dark: 'light',
      light: 'dark'
    }
  }
})
export class ThemeState {
  @Selector()
  static theme(state: ThemeStateModel) {
    return state.currentTheme;
  }

  @Action(ChangeTheme)
  changeTheme(ctx: StateContext<ThemeStateModel>) {
    const prev = ctx.getState().currentTheme;
    const next = ctx.getState().availableThemes[prev];
    ctx.patchState({ currentTheme: next });
  }
}
