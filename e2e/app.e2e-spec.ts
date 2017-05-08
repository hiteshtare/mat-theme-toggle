import { MatThemeTogglePage } from './app.po';

describe('mat-theme-toggle App', () => {
  let page: MatThemeTogglePage;

  beforeEach(() => {
    page = new MatThemeTogglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
