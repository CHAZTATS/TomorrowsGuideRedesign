import { RedesignPage } from './app.po';

describe('redesign App', () => {
  let page: RedesignPage;

  beforeEach(() => {
    page = new RedesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
