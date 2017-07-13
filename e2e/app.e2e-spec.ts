import { Angular2chartPage } from './app.po';

describe('angular2chart App', function() {
  let page: Angular2chartPage;

  beforeEach(() => {
    page = new Angular2chartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
