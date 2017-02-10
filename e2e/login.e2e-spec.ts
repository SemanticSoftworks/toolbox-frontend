/**
 * Created by alica on 2017-02-10.
 */
import { ToolboxLoginPage } from './login.po';

describe('toolbox-frontend App', function() {
  let page: ToolboxLoginPage;

  beforeEach(() => {
    page = new ToolboxLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
