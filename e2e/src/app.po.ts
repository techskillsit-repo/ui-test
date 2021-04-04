import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo()  {
    return browser.get(browser.baseUrl);
  }

  async getTitleText()  {
    return element(by.css('app-root .content span')).getText();
  }

  setName(name: string){
    element(by.id('name')).sendKeys(name);
  }

  clickAddName(){
    element(by.id('addBtn')).click();
  }

  getNamesList() {
    return element.all(by.css('.nameList')).last().getText();
  }


}
