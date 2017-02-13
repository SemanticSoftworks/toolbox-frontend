/**
 * Created by alica on 2017-02-13.
 */
import { browser, element, by } from 'protractor';

export class ToolboxFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('products-root h1')).getText();
  }
}
