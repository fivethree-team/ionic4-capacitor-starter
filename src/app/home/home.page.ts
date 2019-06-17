import { ChangeTheme } from './../store/theme/theme.actions';
import { Component } from '@angular/core';
import { ThemeState, Theme } from '@store/theme/theme.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @Select(ThemeState.theme)
  theme$: Observable<Theme>;

  constructor() {}

  @Dispatch()
  onChangeThemeClick = () => new ChangeTheme();
}
