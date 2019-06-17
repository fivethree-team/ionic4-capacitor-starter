import { ThemeState, ThemeStateModel } from './theme/theme.state';

export interface AppState {
  theme: ThemeStateModel;
}

export const states = [ThemeState];
