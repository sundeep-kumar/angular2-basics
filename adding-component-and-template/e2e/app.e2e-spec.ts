import { AddingComponentAndTemplatePage } from './app.po';

describe('adding-component-and-template App', () => {
  let page: AddingComponentAndTemplatePage;

  beforeEach(() => {
    page = new AddingComponentAndTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
