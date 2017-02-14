/**
 * Created by alica on 2017-02-14.
 */
import { ToolboxRegisterPage } from './register.po';

describe('toolbox-frontend App', function() {
  let page: ToolboxRegisterPage;

  beforeEach(() => {
    page = new ToolboxRegisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
