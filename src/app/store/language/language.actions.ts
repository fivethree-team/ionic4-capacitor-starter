import { Language } from './language.state';

export class ChangeLanguage {
  static readonly type = '[Language] ChangeLanguage';
  constructor(public readonly next?: Language) {}
}
