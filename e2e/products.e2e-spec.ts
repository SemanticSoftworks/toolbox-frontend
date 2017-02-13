/**
 * Created by alica on 2017-02-13.
 */
import { ToolboxFrontendPage } from './products.po';

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
