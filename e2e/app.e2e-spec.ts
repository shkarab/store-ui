import { MystoreUserPage } from './app.po';

describe('mystore-user App', function() {
  let page: MystoreUserPage;

  beforeEach(() => {
    page = new MystoreUserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
