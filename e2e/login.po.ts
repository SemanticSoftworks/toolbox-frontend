/**
 * Created by alica on 2017-02-10.
 */
import { browser, element, by } from 'protractor';

export class ToolboxLoginPage {
  navigateTo() {
    return browser.get('/login.component.html');
  }

  getParagraphText() {
    return element(by.css('login-root h1')).getText();
  }
}
