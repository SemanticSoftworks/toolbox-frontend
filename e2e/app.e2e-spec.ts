import { ToolboxFrontendPage } from './app.po';

describe('toolbox-frontend App', function() {
  let page: ToolboxFrontendPage;

  beforeEach(() => {
    page = new ToolboxFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
