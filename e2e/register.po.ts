/**
 * Created by alica on 2017-02-14.
 */
import { browser, element, by } from 'protractor';

export class ToolboxRegisterPage {
  navigateTo() {
    return browser.get('/register.component.html');
  }

  getParagraphText() {
    return element(by.css('register-root h1')).getText();
  }
}
