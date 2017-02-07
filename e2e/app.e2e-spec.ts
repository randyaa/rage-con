import { RageConPage } from './app.po';

describe('rage-con App', function() {
  let page: RageConPage;

  beforeEach(() => {
    page = new RageConPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
