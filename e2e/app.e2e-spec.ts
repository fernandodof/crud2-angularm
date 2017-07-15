import { AngularMCrudPage } from './app.po';

describe('angular-m-crud App', () => {
  let page: AngularMCrudPage;

  beforeEach(() => {
    page = new AngularMCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
